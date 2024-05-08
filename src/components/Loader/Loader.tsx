import { colors } from '@/constants/colors';
import { useLoader } from './useLoader';

type LoaderSize = 'xs' | 'sm' | 'md' | 'lg';
type LoaderVariant = 'rotate' 

export interface LoaderProps {
  variant?: LoaderVariant;
  size?: LoaderSize;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  variant = 'rotate',
  size = 'md',
  color = colors.black,
  className,
  style
}) => {
  const preps = useLoader({
    variant,
    size,
    color,
    className,
    style
  });

  return <div {...preps} />;;
};
