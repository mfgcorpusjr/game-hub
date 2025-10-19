import { useParams } from "react-router";

import ExpandableText from "@/components/ExpandableText";
import AttributesList from "@/components/AttributesList";
import Movie from "@/components/Movie";
import Screenshots from "@/components/Screenshots";

import useGame from "@/hooks/useGame";

export default function GameDetailsPage() {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);

  if (isLoading) return null;

  if (error || !data) return null;

  return (
    <main className="flex flex-col lg:flex-row gap-8 mt-4">
      <section className="flex-1 p-2 space-y-8">
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <ExpandableText>{data.description_raw}</ExpandableText>
        <AttributesList game={data} />
      </section>

      <section className="flex-1 p-2">
        <Movie id={data.id} />
        <Screenshots id={data.id} />
      </section>
    </main>
  );
}
