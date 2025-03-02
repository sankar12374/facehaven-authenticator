
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import AuthenticationFlow from "./AuthenticationFlow";

const Hero = () => {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <section className="min-h-screen pt-20 px-6 flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              Secure Access with
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700">
                {" "}Face Authentication
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0"
          >
            Experience the future of secure authentication with our state-of-the-art facial recognition technology. Simple, fast, and incredibly secure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-x-4 pt-4"
          >
            <Button size="lg" onClick={() => setShowAuth(true)}>
              Try it now
            </Button>
            <Button variant="outline" size="lg">
              Learn more
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="pt-8 flex flex-wrap justify-center md:justify-start gap-8"
          >
            {["99.9% Accuracy", "GDPR Compliant", "Enterprise Ready"].map((feature, i) => (
              <div key={i} className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-primary"
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
                <span className="text-sm font-medium text-muted-foreground">
                  {feature}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mx-auto w-full max-w-md aspect-square"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-100 to-primary/5 animate-rotate-center" />
          <div className="absolute inset-4 rounded-full bg-white/50 backdrop-blur-sm" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 rounded-3xl overflow-hidden glass-card p-1 shadow-card">
              <div className="w-full h-full relative bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 text-gray-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 flex flex-col justify-end p-3">
                  <div className="w-full h-1 bg-primary/30 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-primary animate-pulse-glow" />
                  </div>
                  <div className="text-xs text-center mt-2 font-medium text-gray-600">
                    Face Detection
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {showAuth && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 m-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Face Authentication</h2>
              <button
                onClick={() => setShowAuth(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <AuthenticationFlow onClose={() => setShowAuth(false)} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
