
// This is a simplified mock implementation of face authentication
// In a real app, this would connect to a backend service for actual face recognition

/**
 * Simulates face registration
 */
export const registerFace = async (faceImage: string): Promise<boolean> => {
  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Store face image in localStorage for demo purposes
  // In a real app, this would be sent to a backend for processing and storage
  localStorage.setItem('registeredFace', faceImage);
  
  return true;
};

/**
 * Simulates face authentication
 */
export const authenticateFace = async (faceImage: string): Promise<boolean> => {
  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  // Get registered face from localStorage
  const registeredFace = localStorage.getItem('registeredFace');
  
  // In a real app, this would compare the faces using a machine learning model
  // For demo purposes, we'll just check if a face is registered
  const isAuthenticated = !!registeredFace;
  
  return isAuthenticated;
};

/**
 * Simulates face authentication progress
 */
export const simulateScanProgress = (
  callback: (progress: number) => void,
  durationMs: number = 3000
): () => void => {
  let startTime = Date.now();
  let animationFrame: number;
  
  const updateProgress = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(Math.round((elapsed / durationMs) * 100), 100);
    
    callback(progress);
    
    if (progress < 100) {
      animationFrame = requestAnimationFrame(updateProgress);
    }
  };
  
  animationFrame = requestAnimationFrame(updateProgress);
  
  // Return a cancel function
  return () => {
    cancelAnimationFrame(animationFrame);
  };
};
