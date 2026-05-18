type TechCardVariant = "primary" | "secondary"

type ProjectTechCardProps = {
  label: string;
  variant?: TechCardVariant;
};

const baseStyle = "px-3 py-1 text-small rounded-full w-fit"

const variantStyles: Record<TechCardVariant, string> = {
  primary:
    "text-brand600 bg-brand200/20",
  secondary:
    "text-brand400 bg-brand200/10"
};

export default function ProjectTechCard({
  label,
  variant = "primary"
}: ProjectTechCardProps) {
  const classes = `${baseStyle} ${variantStyles[variant]}`;

  return (
    <p className={classes}>
      {label}
    </p>
  );
}