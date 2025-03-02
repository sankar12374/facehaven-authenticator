
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import Camera from "./Camera";
import FaceScan from "./FaceScan";
import Dashboard from "./Dashboard";
import { simulateScanProgress, registerFace, authenticateFace } from "@/lib/faceAuth";

type AuthStep = "intro" | "camera" | "scanning" | "success" | "register" | "login";

interface AuthenticationFlowProps {
  onClose: () => void;
}

const AuthenticationFlow = ({ onClose }: AuthenticationFlowProps) => {
  const [currentStep, setCurrentStep] = useState<AuthStep>("intro");
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [scanProgress, setScanProgress] = useState(0);

  const handleCapture = (imageSrc: string) => {
    setCapturedImage(imageSrc);
    setCurrentStep("scanning");
    
    // Simulate scanning progress
    simulateScanProgress((progress) => {
      setScanProgress(progress);
    });
  };

  const handleScanComplete = async () => {
    if (!capturedImage) return;
    
    // Check if user has registered face before
    const registeredFace = localStorage.getItem('registeredFace');
    
    if (registeredFace) {
      // User already registered, try to authenticate
      const isAuthenticated = await authenticateFace(capturedImage);
      if (isAuthenticated) {
        setCurrentStep("success");
      } else {
        // Authentication failed
        // In real app, show error and retry
        setCurrentStep("intro");
      }
    } else {
      // No face registered yet, go to registration flow
      setCurrentStep("register");
    }
  };

  const handleRegister = async () => {
    if (!capturedImage) return;
    
    await registerFace(capturedImage);
    setCurrentStep("success");
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {currentStep === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center text-center px-4"
          >
            <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Face Authentication</h3>
            <p className="text-muted-foreground mb-6">
              Quickly and securely verify your identity using your face.
            </p>
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
              <Button onClick={() => setCurrentStep("camera")}>
                Get Started
              </Button>
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </motion.div>
        )}

        {currentStep === "camera" && (
          <motion.div
            key="camera"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Camera 
              onCapture={handleCapture} 
              onCancel={() => setCurrentStep("intro")} 
            />
          </motion.div>
        )}

        {currentStep === "scanning" && (
          <motion.div
            key="scanning"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="mb-4 text-center">
              <h3 className="text-lg font-semibold mb-1">Analyzing Face</h3>
              <p className="text-sm text-muted-foreground">
                Please wait while we process your biometric data
              </p>
            </div>
            <FaceScan 
              isScanning={true} 
              progress={scanProgress} 
              onComplete={handleScanComplete}
            />
          </motion.div>
        )}

        {currentStep === "register" && (
          <motion.div
            key="register"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">First Time?</h3>
              <p className="text-muted-foreground mb-6">
                We need to register your face for future authentication.
              </p>
            </div>
            
            <div className="flex justify-center space-x-3">
              <Button onClick={handleRegister}>
                Register My Face
              </Button>
              <Button variant="outline" onClick={() => setCurrentStep("intro")}>
                Cancel
              </Button>
            </div>
          </motion.div>
        )}

        {currentStep === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Dashboard onLogout={onClose} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AuthenticationFlow;
