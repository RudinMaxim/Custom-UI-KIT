import { ConfigRuKit } from '@/config';
import styles from './Button.module.scss';

interface ButtonBaseStyles {
  root: string;
  box: string;
  variant: {
    solid: string;
    outline: string;
    ghost: string;
    link: string;
  };
  size: {
    extraSmall: string;
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
  };
  sizeWithIcon: {
    extraSmall: string;
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
  };
  fullWidth: string;
}

export const useButtonBaseStyles = (config: ConfigRuKit): ButtonBaseStyles => {
  const { fontSize, spacing, borderRadius } = config;
  //@ts-expect-error
  const { extraSmall, small, medium, large, extraLarge } = fontSize;
  //@ts-expect-error
  const { extraSmall: extraSmallSpacing, small: smallSpacing } = spacing;
  const {
    //@ts-expect-error
    extraSmall: extraSmallRadius,
    //@ts-expect-error
    small: smallRadius,
    //@ts-expect-error
    medium: mediumRadius,
  } = borderRadius;

  return {
    root: styles.button,
    box: styles['button-box'],
    variant: {
      solid: styles['button__solid'],
      outline: styles['button__outline'],
      ghost: styles['button__ghost'],
      link: styles['button__link'],
    },
    size: {
      extraSmall: `
        padding: ${extraSmallSpacing} ${extraSmallSpacing};
        font-size: ${extraSmall};
        border-radius: ${extraSmallRadius};
        min-height: 2rem;
      `,
      small: `
        padding: ${smallSpacing} ${small};
        font-size: ${small};
        border-radius: ${smallRadius};
        min-height: 2.125rem;
      `,
      medium: `
        padding: ${medium} ${large};
        font-size: ${medium};
        border-radius: ${mediumRadius};
        min-height: 2.25rem;
      `,
      large: `
        padding: ${large} ${extraLarge};
        font-size: ${large};
        border-radius: ${mediumRadius};
        min-height: 2.5rem;
      `,
      extraLarge: `
        padding: ${extraLarge} ${extraLarge};
        font-size: ${extraLarge};
        border-radius: ${mediumRadius};
        min-height: 2.75rem;
      `,
    },
    sizeWithIcon: {
      extraSmall: `
        padding: ${extraSmallSpacing} ${extraSmallSpacing};
        border-radius: ${extraSmallRadius};
      `,
      small: `
        padding: ${smallSpacing};
        border-radius: ${smallRadius};
      `,
      medium: `
        padding: ${medium};
        border-radius: ${mediumRadius};
      `,
      large: `
        padding: ${large};
        border-radius: ${mediumRadius};
      `,
      extraLarge: `
        padding: ${extraLarge};
        border-radius: ${mediumRadius};
      `,
    },
    fullWidth: styles['button__full-width'],
  };
};

export const useButtonModifiers = ({
  variant,
  size,
  sizeWithIcon,
  fullWidth,
}: Partial<ButtonBaseStyles>) => ({
  variant: variant ? `variant-${variant}` : undefined,
  size: size ? `size-${size}` : undefined,
  sizeWithIcon: sizeWithIcon ? `sizeWithIcon-${sizeWithIcon}` : undefined,
  fullWidth: fullWidth ? 'fullWidth' : undefined,
});
