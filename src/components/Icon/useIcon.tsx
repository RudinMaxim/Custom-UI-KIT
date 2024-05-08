
import { IconMap, colors } from '@/constants';
import { parseColor } from '@/utils/parseColor';
import React from 'react';
import { IconProps } from './Icon';

export function useIcon(props: IconProps) {
  const { name, color = colors.black, size = 24, ...rest } = props;

  const iconComponent = () => {
    if (!IconMap[name]) {
      console.error(`Icon not found: ${name}`);
      return null;
    }

    return React.createElement(IconMap[name], { size, color });
  };

  const iconStyle = {
    width: size,
    height: size,
    fill: parseColor(color),
    ...rest.style,
  };

  return {
    ...rest,
    children: iconComponent(),
    style: iconStyle,
  };
}
