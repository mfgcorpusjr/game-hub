import noImage from "@/assets/images/no-image-placeholder.webp";

export const getCroppedImageUrl = (url?: string) => {
  if (!url) return noImage;

  const target = "media/";
  const [first, second] = url.split(target);
  return `${first}${target}crop/600/400/${second}`;
};
