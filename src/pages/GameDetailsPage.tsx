import { useParams } from "react-router";

import ExpandableText from "@/components/ExpandableText";

import useGame from "@/hooks/useGame";

export default function GameDetailsPage() {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);

  if (isLoading) return null;

  if (error || !data) return null;

  return (
    <div className="flex flex-col lg:flex-row mt-4">
      <div className="flex-1 p-2 space-y-4">
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <ExpandableText>{data.description_raw}</ExpandableText>
      </div>
      <div className="flex-1 p-2">Right</div>
    </div>
  );
}
