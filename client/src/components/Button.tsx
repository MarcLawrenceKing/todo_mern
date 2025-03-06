import { FC } from "react";
import { DynamicIcon } from "lucide-react/dynamic";

interface BtnProps {
  label?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  iconName?: any;
  className?: string;
}

const Button: FC<BtnProps> = ({
  iconName,
  label,
  onClick,
  variant = "primary",
  className,
}) => {
  const baseStyles = "transition-all bg-black";
  const variantStyles = {
    primary:
      "text-white text-base flex justify-center gap-2 bg-primary p-2 hover:bg-primary_light rounded-xl w-48 md:w-160 md:text-lg",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <DynamicIcon name={iconName} className="text-white" size={25} />
      {label}
    </button>
  );
};

export default Button;
