import SkillBadge from "./SkillBadge";
import type { SkillCategory } from "@/types/skill";

export default function SkillCategory({
  title,
  skills,
  Icon,
  color
}: SkillCategory) {
  return (
    <div className="flex h-full min-h-0 flex-col rounded-2xl border bg-brand200/10 border-brand200 p-8">
      <div className="flex shrink-0 items-center gap-x-4">
        <div style={{backgroundColor: color}} className="w-fit p-2 rounded-lg text-brand100">
          <Icon className="size-8" />
        </div>
        <h6 className="text-h6 font-bold text-brand950">{title}</h6>
      </div>
      <div className="mt-4 flex flex-1 flex-wrap content-start gap-2">
        {skills.map((skill, index) => (
          <SkillBadge key={index} label={skill} />
        ))}
      </div>
    </div>
  );
}