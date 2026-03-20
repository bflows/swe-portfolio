import { ReactNode } from "react";

export default function SectionContainer({ children, id }: { children: ReactNode, id?: string }) {
  return (
    <div id={id} className="mt-32 max-w-7xl mx-auto px-4 scroll-mt-32 md:mt-48 md:scroll-mt-48">
      {children}
    </div>
  );
}