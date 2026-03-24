import { AboutCardProps } from "@/types/about";

export default function AboutCard({
  title,
  desc,
  Icon,
  bgColor,
  textColor
}: AboutCardProps) {
  return (
    <div className="py-8 w-full flex flex-col items-center justify-center rounded-2xl border border-brand200">
      <div className={`${bgColor} p-2 rounded-2xl`}>
        <Icon className={`${textColor} size-8`} />
      </div>
      <h3 className="text-h6 font-bold mt-4 text-brand950">
        {title}
      </h3>
      <p className="text-p mt-2 text-brand800">
        {desc}
      </p>
    </div>
  );
}