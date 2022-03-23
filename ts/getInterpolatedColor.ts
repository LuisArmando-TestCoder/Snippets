/**
 * @param bottom: less than top
 */
function cornerValue(bottom: number, top: number) {
  return function transformValue(value) {
    return Math.max(Math.min(value, top), bottom);
  };
}

function fitValue(sideA: number, sideB: number) {
  return function transformValue(value) {
    return (
      value * (Math.max(sideA, sideB) - Math.min(sideA, sideB)) +
      Math.min(sideA, sideB)
    );
  };
}

type Quartet = [number, number, number, number];

/**
 * @param frecuency: 0 to 1
 * @param colorQuartet: [0 to 255, 0 to 255, 0 to 255, 0 to 1]
 */
function getInterpolatedColor(
  frecuency: number,
  colorQuartetA: Quartet,
  colorQuartetB: Quartet
) {
  const alphaIndex = 3;
  const [colorBottom, colorTop] = [0, 255];
  const [red, green, blue, alpha] = colorQuartetA.map((value, index) => {
    const interpolation = fitValue(value, colorQuartetB[index])(frecuency);

    return index < alphaIndex
      ? cornerValue(colorBottom, colorTop)(Math.floor(interpolation))
      : interpolation;
  });

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

/*
getInterpolatedColor(
    .5,
    [100, 200, 55, 1],
    [200, 255, 20, .3]
)
*/
