export type TAnimations = {
  fadeIn: string;
  slideIn: string;
  zoomIn: string;
};

export const animations = {
  fadeIn: `
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      animation: fadeIn 0.3s ease-in-out;
    `,
  slideIn: `
      @keyframes slideIn {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(0);
        }
      }
      animation: slideIn 0.3s ease-in-out;
    `,
  zoomIn: `
      @keyframes zoomIn {
        0% {
          transform: scale(0.5);
        }
        100% {
          transform: scale(1);
        }
      }
      animation: zoomIn 0.3s ease-in-out;
    `,
};
