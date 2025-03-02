
import { motion } from "framer-motion";
import Button from "./Button";

interface DashboardProps {
  username?: string;
  onLogout: () => void;
}

const Dashboard = ({ username = "User", onLogout }: DashboardProps) => {
  const currentTime = new Date().toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
  
  const currentDate = new Date().toLocaleDateString([], {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="p-6 pt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-bold">Welcome back, {username}</h2>
        <p className="text-muted-foreground">
          Successfully authenticated at {currentTime} on {currentDate}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="glass-card p-6"
        >
          <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-center mb-2">Security Status</h3>
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-sm font-medium">All systems secure</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Last Login</span>
              <span>Today, 2:30 PM</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Face ID Status</span>
              <span>Active</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Account Protection</span>
              <span>Enhanced</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="glass-card p-6"
        >
          <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-center mb-2">Recent Activity</h3>
          <div className="space-y-3">
            {[
              { action: "Password changed", time: "3 days ago" },
              { action: "New device logged in", time: "1 week ago" },
              { action: "Profile updated", time: "2 weeks ago" },
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <span>{item.action}</span>
                <span className="text-muted-foreground text-xs">{item.time}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <Button variant="ghost" size="sm" className="w-full">
              View All Activity
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex justify-center mt-8"
      >
        <Button variant="outline" onClick={onLogout}>
          Log Out
        </Button>
      </motion.div>
    </div>
  );
};

export default Dashboard;
