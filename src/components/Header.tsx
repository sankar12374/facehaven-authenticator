
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import Button from "./Button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-md">
            <span className="text-white text-lg font-bold">F</span>
          </div>
          <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700">
            FaceAuth
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: "Home", path: "/" },
            { name: "Features", path: "/#features" },
            { name: "How it works", path: "/#how-it-works" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary link-hover",
                location.pathname === item.path ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Log in
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
