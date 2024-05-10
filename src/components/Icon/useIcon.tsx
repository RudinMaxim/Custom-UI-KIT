import { IconMap } from '@/constants';
import { getClasses, getStyle } from '@/helper';
import React from 'react';
import { IconProps } from './Icon';
import styles from './Icon.module.scss';

export function useIcon(props: IconProps) {
  const {
    name,
    customIcon,
    color,
    className: _className,
    size,
    ...rest
  } = props;

  const style = getStyle({
    color,
    width: size,
    height: size,
    ...rest.style,
  });

  const className = getClasses([styles.icon, ...(_className ?? '')]);

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
    className,
    style,
  };
}
