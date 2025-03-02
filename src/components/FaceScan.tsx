
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface FaceScanProps {
  isScanning?: boolean;
  progress?: number;
  onComplete?: () => void;
}

const FaceScan = ({
  isScanning = false,
  progress = 0,
  onComplete
}: FaceScanProps) => {
  const [scanComplete, setScanComplete] = useState(false);
  
  useEffect(() => {
    if (progress >= 100 && !scanComplete) {
      setScanComplete(true);
      setTimeout(() => {
        onComplete?.();
      }, 1000);
    }
  }, [progress, scanComplete, onComplete]);

  return (
    <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100 border border-gray-200">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
      
      {/* Face outline guide */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isScanning ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="w-40 h-48 rounded-full border-2 border-dashed border-primary/70"
        />
      </div>
      
      {/* Scanning effect */}
      {isScanning && !scanComplete && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-x-0 top-1/4 h-1/2 overflow-hidden">
            <div className="w-full h-8 bg-primary/20 backdrop-blur-sm rounded-full animate-scanning" />
          </div>
          
          {/* Corner markers */}
          <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg" />
          <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg" />
          <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-lg" />
          <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg" />
        </div>
      )}
      
      {/* Progress indicator */}
      <div className="absolute bottom-4 inset-x-4">
        <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
          
          <div className="flex justify-between items-center mt-2">
            <div className="text-xs font-medium text-gray-600">
              {scanComplete ? "Scan complete" : isScanning ? "Scanning..." : "Ready to scan"}
            </div>
            <div className="text-xs font-medium text-gray-600">
              {progress}%
            </div>
          </div>
        </div>
      </div>
      
      {/* Success animation */}
      {scanComplete && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center bg-primary/10 backdrop-blur-sm"
        >
          <div className="bg-white rounded-full p-3 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-primary"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default FaceScan;
