import { twMerge } from "tailwind-merge";

type CriticScoreProps = {
  score: number;
};

export default function CriticScore({ score }: CriticScoreProps) {
  const className = twMerge(
    "font-bold badge",
    score > 85 ? "badge-success" : score > 70 ? "badge-warning" : "badge-error"
  );

  return <div className={className}>{score}</div>;
}
