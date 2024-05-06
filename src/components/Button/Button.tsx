import { ComponentProps, ReactNode } from "react";
import style from "./Button.module.scss";

export type ButtonVariant = "solid" | "outline" | "ghost" | "link";
export type ButtonSize = "xs" | "sm" | "md" | "lg";
export interface ButtonProps extends ComponentProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export function Button({
  children,
  variant = "solid",
  size = "md",
  isLoading = false,
  isDisabled = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${style.button} ${style[`button--${variant}`]} ${style[`button--${size}`]}`}
      disabled={isDisabled || isLoading}
      {...props}
    >
      {" "}
      {children}{" "}
    </button>
  );
}
