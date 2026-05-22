import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = 'primary' | 'secondary';
type RoundedVariant = 'lg' | 'full';
type SizeVariant= 'sm' | 'md';

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  rounded?: RoundedVariant;
  size?: SizeVariant;
  href?: string;
  target?: string;
  className?: string;
};

const baseStyle = "flex items-center justify-center text-center gap-x-2 text-p border cursor-pointer transition-colors duration-300 ease-in-out";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary/10 text-primary/80 border-primary/20 hover:bg-primary/20 hover:text-primary hover:border-primary/40",
  secondary:
    "bg-brand200/20 text-brand600 border-brand200/80 hover:bg-brand200 hover:text-brand800 hover:border-brand300"
};

const borderStyle: Record<RoundedVariant, string> = {
  lg: "rounded-lg",
  full: "rounded-full"
};

const sizeStyle: Record<SizeVariant, string> = {
  sm: "py-2 px-4",
  md: "py-3 px-6"
};

export default function Button({
  children,
  variant = "primary",
  href,
  target,
  rounded = "lg",
  size = "md",
  className,
}: ButtonProps) {
  const classes = `${baseStyle} ${variantStyles[variant]} ${borderStyle[rounded]} ${sizeStyle[size]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} target={target} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button >
  );
}