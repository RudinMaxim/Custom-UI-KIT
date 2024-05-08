import { IconMap, colors } from '@/constants';
import { parseColor } from '@/utils/parseColor';
import React from 'react';
import { IconProps } from './Icon';

export function useIcon(props: IconProps) {
  const { name, color = colors.black, size = 24, ...rest } = props;

  const getButtonStyle = (props: IconProps) => {
    const { color } = props;
    return {
      width: size,
      height: size,
      fill: parseColor(color),
      ...props.style,
    };
  };

  const getButtonContent = (): JSX.Element | null => {
    if (!IconMap[name]) {
      console.error(`Icon not found: ${name}`);
      return null;
    }

    return React.createElement(IconMap[name], { size, color });
  };

  return {
    ...rest,
    children: getButtonContent(),
    style: getButtonStyle(props),
  };
}
