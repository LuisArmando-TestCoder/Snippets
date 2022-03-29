export default function getNRoot(radicand: number, index: number = 3) {
  return Math.abs(radicand) ** (1 / index);
}

/*
 * getNRoot(27) // 3
 * getNRoot(81, 4) // 3
 */
