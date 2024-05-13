export const adultOnly = (value) => {
  const today = new Date();
  today.setFullYear(today.getFullYear() - 18);
  return value <= today || "Adult only. 18+ 😎";
};
