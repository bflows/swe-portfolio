export default function ProjectTechCard({ label }: { label: string }) {
  return (
    <p className="px-3 py-1 text-small rounded-full w-fit border text-brand800 bg-brand200 border-brand300">
      {label}
    </p>
  );
}