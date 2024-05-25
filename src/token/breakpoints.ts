export type Device = 'phone' | 'tablet' | 'laptop' | 'desktop';

export const breakpoints: Record<Device, number> = {
  phone: 480,
  tablet: 768,
  laptop: 1024,
  desktop: 1200,
};
