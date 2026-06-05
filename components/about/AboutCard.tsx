import { AboutCardProps } from "@/types/about";

export default function AboutCard({
  title,
  desc,
  Icon,
  bgColor,
  textColor
}: AboutCardProps) {
  return (
    <div className="px-4 py-3 sm:px-6 sm:py-5 w-full min-h-full flex flex-row gap-x-4 items-center justify-start sm:flex-col sm:items-center sm:justify-center rounded-2xl bg-brand200/10">
      <div className={`${bgColor} p-4 md:p-5 rounded-full`}>
        <Icon className={`${textColor} size-6.5 md:size-7`} />
      </div>
      <div>
        <h3 className="text-p font-bold sm:text-center sm:mt-2 text-brand950 md:text-h6 md:mt-4">
          {title}
        </h3>
        <p className="text-small mt-1 sm:text-center text-brand800 md:text-p md:mt-2">
          {desc}
        </p>
      </div>
    </div>
  );
}