export type Shape = 'circle' | 'square' | 'rectangle' | 'triangle';

export const shapes: Record<Shape, string> = {
  circle: 'border-radius: 50%',
  square: 'border-radius: 0',
  rectangle: 'border-radius: 0.25rem',
  triangle: 'clip-path: polygon(50% 0%, 0% 100%, 100% 100%)',
};