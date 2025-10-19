import useScreenshots from "@/hooks/useScreenshot";

type ScreenshotsProps = {
  id: number;
};

export default function Screenshots({ id }: ScreenshotsProps) {
  const { data, error } = useScreenshots(id);

  if (error) return null;

  return (
    <section className="grid sm:grid-cols-2">
      {data?.results.map((screenshot) => (
        <img key={screenshot.id} src={screenshot.image} />
      ))}
    </section>
  );
}
