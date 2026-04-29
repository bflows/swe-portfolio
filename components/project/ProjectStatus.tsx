import type { ProjectStatusValue } from "@/types/project";
import type { IconType } from "react-icons";
import { LuArchive, LuCircleDotDashed, LuRadio } from "react-icons/lu";

export type { ProjectStatusValue };

const STATUS: Record<
  ProjectStatusValue,
  { label: string; Icon: IconType; className: string }
> = {
  building: {
    label: "Building",
    Icon: LuCircleDotDashed,
    className: "text-building bg-brand100 border-building/40",
  },
  live: {
    label: "Live",
    Icon: LuRadio,
    className: "text-primary bg-brand100 border-primary/40",
  },
  archived: {
    label: "Archived",
    Icon: LuArchive,
    className: "text-brand600 bg-brand100 border-brand300",
  },
};

type ProjectStatusProps = {
  status: ProjectStatusValue;
};

export default function ProjectStatus({ status }: ProjectStatusProps) {
  const { label, Icon, className } = STATUS[status];

  return (
    <div
      className={`px-3 py-1 flex items-center gap-x-2 rounded-full border ${className}`}
    >
      <Icon className="size-4 shrink-0" aria-hidden />
      <p className="text-small">{label}</p>
    </div>
  );
}
