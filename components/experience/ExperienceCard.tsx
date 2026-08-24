import { ExperienceCardProps } from "@/types/experience";
import { LuBuilding2, LuCalendar } from "react-icons/lu";
import ExperienceLogo from "./ExperienceLogo";

export default function ExperienceCard({
  title,
  company,
  date,
  summary,
  tags,
  leftCol,
  img,
  isActive = false,
}: ExperienceCardProps) {
  return (
    <div>
      <div key={`${company}-${title}`} className="relative">
        <div className="pl-4 md:pl-0">
          <article
            className={`flex flex-col rounded-2xl px-6 py-5 transition-all duration-300 ease-in-out bg-linear-to-br from-brand200/10 from-40 to-80% to-brand200/20 md:px-7 md:py-6 md:w-[calc(50%-2.5rem)] ${isActive ? "bg-linear-to-br from-40% from-brand200/30 to-60% to-primary/10" : ""} ${leftCol ? "md:mr-auto" : "md:ml-auto"
              }`}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-x-2">
              <h3 className="text-h6 font-semibold text-brand950">{title}</h3>
              <div className="mt-2 flex items-center gap-x-2 text-brand400 md:mt-0 lg:w-1/3 lg:justify-end">
                <div className="md:hidden">
                  <LuCalendar className="size-4" />
                </div>
                <p className="text-sm">
                  {date}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-3 text-primary mt-4">
              <div>
                {img ? (
                  <ExperienceLogo src={img} alt={`${company} logo`} />
                ) : (
                  <LuBuilding2 className="size-6" />
                )}
              </div>
              <p className="text-p font-bold text-brand800">
                {company}
              </p>
            </div>
            <p className="mt-2 text-p line-clamp-8 text-brand600">
              {summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-small rounded-full ring bg-primary/20 text-primary ring-primary/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </div>

        <div
          className={`absolute top-1/2 left-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ease-in-out md:left-1/2 
            ${isActive ? "bg-primary" : "bg-primary/20"}
          `}
        />
      </div>
    </div>
  );
}