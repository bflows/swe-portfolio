import { ExperienceCardProps } from "@/types/experience";
import { LuBuilding2, LuCalendar } from "react-icons/lu";

export default function ExperienceCard({
  title,
  company,
  date,
  summary,
  tags,
  leftCol,
  isActive = false,
}: ExperienceCardProps) {
  return (
    <div>
      <div key={`${company}-${title}`} className="relative">
        <div className="pl-4 md:pl-0">
          <article
            className={`flex flex-col rounded-2xl border p-4 border-brand200 md:p-6 md:w-[calc(50%-2.5rem)] ${leftCol ? "md:mr-auto" : "md:ml-auto"
              }`}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-x-2">
              <h3 className="text-h6 font-semibold text-brand950">{title}</h3>
              <div className="mt-2 flex items-center gap-x-1 text-brand600 md:mt-0">
                <div className="md:hidden">
                  <LuCalendar className="size-4" />
                </div>
                <p className="text-sm">
                </p>{date}
              </div>
            </div>
            <div className="hidden items-center gap-x-1 text-primary md:flex md:mt-2">
                <div>
                  <LuBuilding2 className="size-6" />
                </div>
                <p className="text-sm">
                </p>{company}
              </div>
            <p className="mt-4 text-p text-brand800">{summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
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
          className={`absolute top-1/2 left-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-300 ease-in-out md:left-1/2 ${
            isActive ? "bg-primary" : "bg-primary/20"
          }`}
        />
      </div>
    </div>
  );
}