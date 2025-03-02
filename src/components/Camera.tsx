
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

interface CameraProps {
  onCapture: (imageSrc: string) => void;
  onCancel: () => void;
}

const Camera = ({ onCapture, onCancel }: CameraProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Start camera
  useEffect(() => {
    const startCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
          audio: false,
        });
        setStream(mediaStream);
        
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
          videoRef.current.onloadedmetadata = () => {
            setIsReady(true);
          };
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
        setError("Could not access camera. Please check your permissions.");
      }
    };

    startCamera();

    // Cleanup
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const captureImage = () => {
    if (!canvasRef.current || !videoRef.current || !isReady) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    
    // Match canvas size to video dimensions
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    // Draw current video frame to canvas
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageSrc = canvas.toDataURL("image/png");
      onCapture(imageSrc);
    }
  };

  const startCountdown = () => {
    setCountdown(3);
    
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev === null || prev <= 1) {
          clearInterval(timer);
          if (prev === 1) {
            captureImage();
          }
          return null;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-sm rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 mb-4">
        {error ? (
          <div className="aspect-[3/4] flex items-center justify-center bg-gray-100 p-4 text-center">
            <div>
              <div className="text-red-500 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <p className="text-gray-700">{error}</p>
              <Button className="mt-4" onClick={onCancel}>
                Back
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="aspect-[3/4] bg-black">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Overlay for face guide */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-48 rounded-full border-2 border-dashed border-white/70" />
              </div>
              
              {/* Corner markers */}
              <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-white/80 rounded-tl-lg" />
              <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-white/80 rounded-tr-lg" />
              <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-white/80 rounded-bl-lg" />
              <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-white/80 rounded-br-lg" />
            </div>
            
            {/* Countdown overlay */}
            {countdown !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
              >
                <div className="text-6xl font-bold text-white">{countdown}</div>
              </motion.div>
            )}
          </>
        )}
      </div>
      
      {/* Hidden canvas for capturing the image */}
      <canvas ref={canvasRef} className="hidden" />
      
      {/* Controls */}
      <div className="flex items-center justify-center space-x-4">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        {isReady && countdown === null && !error && (
          <Button onClick={startCountdown}>
            Capture
          </Button>
        )}
      </div>
    </div>
  );
};

export default Camera;
