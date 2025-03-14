import { FC } from "react";
import { DynamicIcon } from "lucide-react/dynamic";

interface BtnProps {
  label?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
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
  const baseStyles =
    "transition-all flex justify-center items-center gap-2 rounded-md hover:brightness-90";
  const variantStyles = {
    primary: {
      styles: "py-2 text-base text-white w-48 md:w-160 md:text-lg",
      iconSize: 23,
    },
    secondary: {
      styles: "py-1 text-sm md:text-base w-28 py-2",
      iconSize: 16,
    },
  };
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant].styles} ${className}`}
    >
      <DynamicIcon name={iconName} size={variantStyles[variant].iconSize} />
      {label}
    </button>
  );
};

export default Button;
