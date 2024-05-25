export type TDevice = 'phone' | 'tablet' | 'laptop' | 'desktop';

export const breakpoints: Record<TDevice, number> = {
  phone: 480,
  tablet: 768,
  laptop: 1024,
  desktop: 1200,
};
