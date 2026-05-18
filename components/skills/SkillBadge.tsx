export default function SkillBadge({label}: {label: string}) {
  return (
    <div className="px-3 py-1 w-fit rounded-lg bg-brand200/20 text-brand600">
      {label}
    </div>
  );
}