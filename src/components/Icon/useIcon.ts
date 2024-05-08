import { IconMap } from '@/constants';
import { parseColor } from '@/utils';
import React from 'react';
import { IconProps } from './Icon';

export function useIcon(props: IconProps) {
  const { name, customIcon, ...rest } = props;

  const getIconStyle = (props: IconProps) => {
    const { color, size = 24 } = props;
    return {
      width: size,
      height: size,
      fill: parseColor(color),
      ...props.style,
    };
  };

  const getIconContent = (props: IconProps): JSX.Element | null => {
    const { name, size = 24, color, customIcon } = props;

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
    children: getIconContent(props),
    style: getIconStyle(props),
  };
}
