import { useParams } from "react-router";

import ExpandableText from "@/components/ExpandableText";
import AttributesList from "@/components/AttributesList";
import Movie from "@/components/Movie";
import Screenshots from "@/components/Screenshots";
import Loading from "@/components/Loading";

import useGame from "@/hooks/useGame";

export default function GameDetailsPage() {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);

  if (isLoading) return <Loading className="mt-8" />;

  if (error || !data) throw Error;

  return (
    <main className="flex flex-col lg:flex-row gap-8 mt-4">
      <section className="flex-1 p-4 space-y-8">
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <ExpandableText>{data.description_raw}</ExpandableText>
        <AttributesList game={data} />
      </section>

      <section className="flex-1 p-4 space-y-4">
        <Movie id={data.id} />
        <Screenshots id={data.id} />
      </section>
    </main>
  );
}
