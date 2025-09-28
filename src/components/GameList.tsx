import useGames from "@/hooks/useGames";

export default function GameList() {
  const { data, isLoading, error } = useGames();

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <ul>
      {data?.results.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
}
