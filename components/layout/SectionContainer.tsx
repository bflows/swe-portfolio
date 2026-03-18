import { ReactNode } from "react";

export default function SectionContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mt-48 px-6">
      {children}
    </div>
  );
}