import clsx from "clsx";

type CriticScoreProps = {
  score: number | null;
};

export default function CriticScore({ score }: CriticScoreProps) {
  if (!score) return null;

  return (
    <div
      className={clsx("badge badge-error", {
        "badge-success": score >= 90,
        "badge-warning": score >= 80 && score < 90,
      })}
    >
      {score}
    </div>
  );
}
