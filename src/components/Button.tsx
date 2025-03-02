
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  fullWidth?: boolean;
}

const Button = ({
  children,
  className,
  variant = "primary",
  size = "md",
  isLoading = false,
  fullWidth = false,
  ...props
}: ButtonProps) => {
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "bg-transparent hover:bg-secondary text-foreground",
    outline: "bg-transparent border border-border hover:bg-secondary text-foreground",
  };

  const sizeClasses = {
    sm: "text-sm px-3 py-1.5 rounded-md",
    md: "px-4 py-2 rounded-lg",
    lg: "text-lg px-6 py-3 rounded-lg",
  };

  return (
    <button
      className={cn(
        "font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring/50 focus:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 shadow-button",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? "w-full" : "",
        className
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
