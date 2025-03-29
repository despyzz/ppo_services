export enum NewsElementVariants {
  Square,
  Rectangle,
}

export const VariantsToAspectRatio = {
  [NewsElementVariants.Square]: 'w-[clamp(144px,_35vw,_375px)]',
  [NewsElementVariants.Rectangle]: 'aspect-[2/1]',
};
