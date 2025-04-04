export const formatPriceRange = (priceRange: string) => {
  const [min, max] = priceRange.split('~');
  const formattedMin = (parseInt(min) * 10000).toLocaleString();
  const formattedMax = (parseInt(max) * 10000).toLocaleString();
  return `${formattedMin} - ${formattedMax} won`;
};
