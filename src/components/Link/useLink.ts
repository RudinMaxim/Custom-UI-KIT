import { getClasses } from '@/helper';
import { LinkProps } from './Link';
import styles from './Link.module.scss';

export function useLink(props: LinkProps) {
  const {
    className: _className,
    href,
    target,
    size,
    children,
    isAnchor,
    ...rest
  } = props;

  const className = getClasses(
    styles.link,
    styles[`link__${size}`],
    isAnchor ? styles['link--anchor'] : '',
    _className
  );

  const iconSize =
    props.size === 'extra-small'
      ? 16
      : props.size === 'small'
        ? 20
        : props.size === 'medium'
          ? 24
          : props.size === 'large'
            ? 32
            : 40;

  return {
    className,
    children,
    target: isAnchor ? '_self' : target,
    href: isAnchor ? `${href}/#${children}` : href,
    isAnchor,
    iconSize,
    ...rest,
  };
}
