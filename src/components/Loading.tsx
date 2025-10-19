import { twMerge } from "tailwind-merge";

type LoadingProps = {
  className?: string;
};

export default function Loading({ className }: LoadingProps) {
  return (
    <div
      className={twMerge(
        "block mx-auto loading loading-spinner loading-xl",
        className
      )}
    />
  );
}
