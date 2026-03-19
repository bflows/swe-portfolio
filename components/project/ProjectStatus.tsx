import { LuCircleDotDashed } from "react-icons/lu";

export default function ProjectStatus() {
  return (
    <div className="px-3 py-1 flex items-center gap-x-2 rounded-full border text-building bg-brand100 border-brand200">
      <div>
        <LuCircleDotDashed />
      </div>
      <p className="text-small">Building</p>
    </div>
  );
}