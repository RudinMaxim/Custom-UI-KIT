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

export const useButtonBaseStyles = (
  config: Pick<ConfigRuKit, 'fontSize' | 'spacing' | 'borderRadius'>
): ButtonBaseStyles => {
  const { fontSize, spacing, borderRadius } = config;

  const { small } = spacing;
  const { small: smallRadius, medium: mediumRadius } = borderRadius;

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
        padding: ${small} ${small};
        font-size: ${fontSize.extraSmall};
        border-radius: ${smallRadius};
        min-height: 2rem;
      `,
      small: `
        padding: 0.75rem 1.25rem;
        font-size: ${fontSize.small};
        border-radius: ${smallRadius};
        min-height: 2.125rem;
      `,
      medium: `
        padding: 1rem 1.5rem;
        font-size: ${fontSize.medium};
        border-radius: ${mediumRadius};
        min-height: 2.25rem;
      `,
      large: `
        padding: 1.25rem 1.75rem;
        font-size: ${fontSize.large};
        border-radius: ${mediumRadius};
        min-height: 2.5rem;
      `,
      extraLarge: `
        padding: 1.5rem 2rem;
        font-size: ${fontSize.extraLarge};
        border-radius: ${mediumRadius};
        min-height: 2.75rem;
      `,
    },
    sizeWithIcon: {
      extraSmall: `
        padding: 0.5rem 1rem;
        border-radius: ${smallRadius};
      `,
      small: `
        padding: 0.75rem;
        border-radius: ${smallRadius};
      `,
      medium: `
        padding: 1rem;
        border-radius: ${mediumRadius};
      `,
      large: `
        padding: 1.25rem;
        border-radius: ${mediumRadius};
      `,
      extraLarge: `
        padding: 1.5rem;
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
  variant: variant ?? undefined,
  size: size ? `size-${size}` : undefined,
  sizeWithIcon: sizeWithIcon ? `sizeWithIcon-${size}` : undefined,
  fullWidth: fullWidth ? 'fullWidth' : undefined,
});
