type TechCardVariant = "primary" | "secondary"

type ProjectTechCardProps = {
  label: string;
  variant?: TechCardVariant;
};

const baseStyle = "px-3 py-1 text-small rounded-full w-fit border"

const variantStyles: Record<TechCardVariant, string> = {
  primary:
    "text-brand800 bg-brand200 border-brand300",
  secondary:
    "text-brand400 bg-brand100 border-brand200"
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