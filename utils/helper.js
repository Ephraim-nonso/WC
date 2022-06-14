export const formatAddress = (address) => {
  return `${address.slice(0, 10)}...${address.slice(
    address.length - 4,
    address.length
  )}`;
};
