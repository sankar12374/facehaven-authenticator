
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Button from "../components/Button";

const Index = () => {
  return (
    <Layout>
      <Hero />
      
      {/* Features section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Features
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Advanced Face Authentication Technology
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our cutting-edge technology offers the most secure and convenient way to protect your digital identity.
              </p>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
                title: "Enhanced Security",
                description:
                  "Biometric authentication with liveness detection prevents spoofing and unauthorized access attempts.",
              },
              {
                icon: (
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Lightning Fast",
                description:
                  "Authenticate in under 2 seconds with our optimized facial recognition algorithms.",
              },
              {
                icon: (
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
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                    />
                  </svg>
                ),
                title: "Privacy First",
                description:
                  "Your biometric data never leaves your device. We use secure local processing to protect your privacy.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How it works section */}
      <section id="how-it-works" className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                How It Works
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Simple, Secure Authentication
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our face authentication system is designed to be intuitive and seamless.
              </p>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Register",
                description: "Create your account and register your face securely.",
              },
              {
                step: "02",
                title: "Position",
                description: "Align your face within the frame when prompted.",
              },
              {
                step: "03",
                title: "Verify",
                description: "Our system verifies your identity in seconds.",
              },
              {
                step: "04",
                title: "Access",
                description: "Gain immediate access to your secured account.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="glass-card p-6 h-full">
                  <div className="text-4xl font-bold text-primary/20 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary/30"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: a1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto glass-card p-10 md:p-16 text-center rounded-3xl shadow-card"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to experience the future of authentication?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of users who have made the switch to secure, passwordless authentication.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg">Get Started for Free</Button>
            <Button variant="outline" size="lg">
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-md">
                <span className="text-white text-lg font-bold">F</span>
              </div>
              <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700">
                FaceAuth
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {["Privacy", "Terms", "Security", "Contact", "About"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors link-hover"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} FaceAuth. All rights reserved.
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default Index;
