import ScreenshotSkeleton from "@/components/ScreenshotSkeleton";

import useScreenshots from "@/hooks/useScreenshot";

type ScreenshotsProps = {
  id: number;
};

export default function Screenshots({ id }: ScreenshotsProps) {
  const { data, isLoading, error } = useScreenshots(id);
  const skeletons = [1, 2, 3, 4];

  if (error) return null;

  return (
    <section className="grid sm:grid-cols-2 gap-2">
      {isLoading &&
        skeletons.map((skeleton) => <ScreenshotSkeleton key={skeleton} />)}

      {data?.results.map((screenshot) => (
        <img
          key={screenshot.id}
          src={screenshot.image}
          className="object-cover w-full h-full"
        />
      ))}
    </section>
  );
}
