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
  variant,
  className,
}) => {
  const baseStyles = " ";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };
  return (
    <div
      className={`flex flex-row justify-center gap-2 bg-primary_light hover:bg-primary rounded-lg  ${className}`}
    >
      <DynamicIcon name={iconName} className="text-text_primary " size={35} />
      <button onClick={onClick} className={baseStyles}>
        {label}
      </button>
    </div>
  );
};

export default Button;
