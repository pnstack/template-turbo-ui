import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import cx from "clsx";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button: FC<IButtonProps> = ({
  onClick,
  disabled,
  className,
  children,
  variant = "primary",
  size = "md",
  ...rest
}) => {
  const baseStyles =
    "inline-flex items-center hello justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border border-red-500";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus-visible:ring-gray-500",
    outline: "border-2 border-gray-300 hover:bg-gray-50 focus-visible:ring-gray-500",
  };

  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-base",
    lg: "h-12 px-6 text-lg",
  };

  return (
    <button
      type="button"
      className={cx(baseStyles, variants[variant], sizes[size], disabled && "opacity-50 cursor-not-allowed", className)}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
