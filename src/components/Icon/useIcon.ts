import { IconMap } from '@/constants';
import { parseColor } from '@/utils';
import React from 'react';
import { IconProps } from './Icon';

export function useIcon(props: IconProps) {
  const { name, customIcon, color, size = 24, ...rest } = props;

  const getIconStyle = () => {
    return {
      width: size,
      height: size,
      fill: parseColor(color),
      ...rest.style,
    };
  };

  const getIconContent = (): JSX.Element | null => {
    if (customIcon && React.isValidElement(customIcon)) {
      return customIcon;
    }

    if (!IconMap[name]) {
      console.error(`Icon not found: ${name}`);
      return null;
    }

    return React.createElement(IconMap[name], { size, color });
  };

  return {
    ...rest,
    children: getIconContent(),
    style: getIconStyle(),
  };
}
