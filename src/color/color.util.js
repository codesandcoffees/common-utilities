const randomPastelColor = () => {
  const pastel = `hsl(${360 * Math.random()},${
    25 + 70 * Math.random()}%,${
    85 + 10 * Math.random()}%)`;
  return pastel;
};

const ColorUtil = {
  randomPastelColor
};

export default ColorUtil;
