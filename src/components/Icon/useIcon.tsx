import { Icons } from '@/constants';
import { getClasses, getStyle } from '@/helper';
import React from 'react';
import { IconProps } from './Icon';
import styles from './Icon.module.scss';

export function useIcon(props: IconProps) {
  const {
    name,
    customIcon,
    color,
    text,
    textPosition,
    style: _style,
    className: _className,
    size,
    ...rest
  } = props;

  const style = getStyle({
    color,
    width: size,
    height: size,
    ..._style,
  });

  const className = getClasses(styles.icon, _className);
  const textClassName = getClasses(styles.text, styles[`text-${textPosition}`]);

  const getIconContent = (): JSX.Element | null => {
    if (customIcon && React.isValidElement(customIcon)) {
      return customIcon;
    }

    if (!Icons[name]) {
      console.error(`Icon not found: ${name}`);
      return null;
    }

    return React.createElement(Icons[name], { size, color });
  };

  return {
    ...rest,
    children: (
      <div className={className} style={style}>
        {getIconContent()}
        {text && <span className={textClassName}>{text}</span>}
      </div>
    ),
    className,
    style,
  };
}
