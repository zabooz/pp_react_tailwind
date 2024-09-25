export const cardsGrow = (
  firstCard: boolean,
  secondCard: boolean,
  count: number
) => {
  if (firstCard && !secondCard) {
    return "lg:growBox";
  } else if (!firstCard && secondCard) {
    return "lg:vanish";
  } else if (!firstCard && !secondCard && count !== 0) {
    return "lg:shrinkBox";
  } else {
    return "lg:appear";
  }
};
