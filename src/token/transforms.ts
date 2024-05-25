export const transforms = {
  rotate: (degrees: number) => `rotate(${degrees}deg)`,
  scale: (x: number, y?: number) => `scale(${x}, ${y || x})`,
  skew: (x: number, y?: number) => `skew(${x}deg, ${y ? `${y}deg` : '0'})`,
  translate: (x: number, y: number) => `translate(${x}px, ${y}px)`,
};
