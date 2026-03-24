import { LuBriefcase } from "react-icons/lu";

export default function AboutCard() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-brand200">
      <div className="bg-primary/20 p-2 rounded-2xl">
        <LuBriefcase className="text-primary size-8" />
      </div>
      <h3 className="text-h6 font-bold mt-4 text-brand950">
        4+ Years
      </h3>
      <p className="text-p mt-2 text-brand800">
        Software Development
      </p>
    </div>
  );
}