import React, { useState } from "react";
import { motion } from "framer-motion";

export interface ButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

const ButtonVariant = {
  primary:
    "border-accent text-accent hover:text-blue-500 hover:border-blue-500",
  secondary:
    "border-background text-background hover:text-blue-500",
};

const CircleColor = {
  primary: "bg-accent",
  secondary: "bg-background",
};

// Define Framer Motion variants for the icon rotation
const iconVariants = {
  initial: { rotate: 0 },
  hover: { rotate: -90 },
};

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  variant = "primary",
  onClick,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group relative flex items-center justify-center gap-3 px-6 py-4 text-md overflow-hidden font-semibold 
        transition-all duration-300 ease-in-out
        active:scale-95
        border-2
        ${ButtonVariant[variant]} 
        ${className}
      `}
    >
      {/* THE EXPANDING CIRCLE */}
      <div className="absolute left-0 top-0 z-0 h-full w-full pointer-events-none">
         <div 
          className={`
            absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2
            w-[500px] h-[500px] rounded-full 
            transform transition-transform duration-500 ease-out
            scale-0 group-hover:scale-100 origin-center -z-10
            ${CircleColor[variant]}
          `} 
        />
      </div>
      
      {/* Label - Relative Z-10 to stay on top */}
      <span className="relative z-10 leading-none">{children}</span>
      
      {/* Icon Wrapper - Relative Z-10 to stay on top */}
      <div className="relative z-10 flex items-center justify-center">
         {/* Icon: Using animate prop to respond to the isHovered state */}
         <motion.div 
            variants={iconVariants}
            initial="initial"
            animate={isHovered ? "hover" : "initial"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-md"
         >
            {icon}
         </motion.div>
      </div>
    </button>
  );
};

export default Button;