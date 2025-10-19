import { type ReactNode } from "react";

type AttributesListItemProps = {
  title: string;
  children: ReactNode;
};

export default function AttributesListItem({
  title,
  children,
}: AttributesListItemProps) {
  return (
    <section className="space-y-2">
      <p className="text-gray-500 font-bold">{title}</p>
      {children}
    </section>
  );
}
