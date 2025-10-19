import { useState } from "react";

type ExpandableTextProps = {
  maxLength?: number;
  children: string;
};

export default function ExpandableText({
  maxLength = 300,
  children,
}: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (children.length <= maxLength) {
    return <p className="text-gray-500">{children}</p>;
  }

  return (
    <p className="text-gray-500 leading-7">
      {isExpanded ? children : `${children.slice(0, maxLength)}...`}

      <button
        className="btn btn-warning btn-active btn-xs ml-1"
        onClick={() => setIsExpanded((prevIsExpanded) => !prevIsExpanded)}
      >
        Show {isExpanded ? "less" : "more"}
      </button>
    </p>
  );
}
