export const pictureArray = (
  basePath: string,
  fileExtension: string,
  numberOfImages: number
) => {
  const imagePaths: string[] = Array.from(
    { length: numberOfImages },
    (_, index) => `${basePath}profile${index}${fileExtension}`
  );

  return imagePaths;
};
