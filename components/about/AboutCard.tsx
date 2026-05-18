import { AboutCardProps } from "@/types/about";

export default function AboutCard({
  title,
  desc,
  Icon,
  bgColor,
  textColor
}: AboutCardProps) {
  return (
    <div className="px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 w-full min-h-full flex flex-col items-center justify-center rounded-2xl border border-brand200">
      <div className={`${bgColor} p-2 rounded-full`}>
        <Icon className={`${textColor} size-5`} />
      </div>
      <h3 className="text-p font-bold text-center mt-2 text-brand950 lg:text-h6 lg:mt-4">
        {title}
      </h3>
      <p className="text-small mt-1 text-center text-brand800 lg:text-p lg:mt-2">
        {desc}
      </p>
    </div>
  );
}