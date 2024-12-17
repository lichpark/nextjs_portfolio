export const numbertocomma = (num) => {
  if (Number(num) > 0) {
    return Number(num).toLocaleString();
  }
};
