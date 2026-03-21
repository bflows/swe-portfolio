export default function SkillBadge({label}: {label: string}) {
  return (
    <div className="px-3 py-1 w-fit rounded-lg border bg-brand200 text-brand800 border-brand300">
      {label}
    </div>
  );
}