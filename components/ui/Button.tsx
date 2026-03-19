import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
};

const baseStyle = "flex items-center justify-center gap-x-2 py-3 px-4 rounded-lg w-1/2 border transition-colors duration-300 ease-in-out sm:w-fit sm:px-6";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary/10 text-primary/80 border-primary/20 hover:bg-primary/20 hover:text-primary hover:border-primary/40",
  secondary:
    "bg-white/5 text-white/80 border-white/20 hover:bg-white/10 hover:text-white hover:border-white/30"
};

export default function Button({
  children,
  variant = "primary",
  href,
  className,
}: ButtonProps) {
  const classes = `${baseStyle} ${variantStyles[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
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