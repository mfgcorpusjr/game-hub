type CriticScoreProps = {
  score: number;
};

export default function CriticScore({ score }: CriticScoreProps) {
  return (
    <div
      className={`badge badge-${
        score > 85 ? "success" : score > 70 ? "warning" : "error"
      }`}
    >
      {score}
    </div>
  );
}
