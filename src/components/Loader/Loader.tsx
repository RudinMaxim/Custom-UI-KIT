import { colors } from '@/constants/colors';
import { useLoader } from './useLoader';

type LoaderSize = 'xs' | 'sm' | 'md' | 'lg';
type LoaderVariant = 'rotate'

export interface LoaderProps {
  variant?: LoaderVariant;
  size?: LoaderSize;
  color?: string;
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  variant = 'rotate',
  size = 'md',
  color = colors.black,
  className,
}) => {
  const preps = useLoader({
    variant,
    size,
    color,
    className,
  });

  return <div {...preps} />;;
};
