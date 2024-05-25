export type TTransitions = {
  default: string;
  fast: string;
  slow: string;
  ease: string;
  easeIn: string;
  easeOut: string;
  easeInOut: string;
  linear: string;
};

export const transitions: TTransitions = {
  default: 'all 0.2s ease-in-out',
  fast: 'all 0.1s ease-in-out',
  slow: 'all 0.3s ease-in-out',
  ease: 'all 0.2s ease',
  easeIn: 'all 0.2s ease-in',
  easeOut: 'all 0.2s ease-out',
  easeInOut: 'all 0.2s ease-in-out',
  linear: 'all 0.2s linear',
};
