import { forwardRef } from 'react';
import classNames from 'classnames';
import type { ReactNode, ComponentPropsWithRef, MouseEvent } from 'react';
import useColorLevel, { ColorLevel } from './hooks/useColorLevel';
import { CONTROL_SIZES, SIZES } from '../../utils/constants';
import { CommonProps } from './@type/common';

export declare namespace TypeAttributes {
  type Size = 'lg' | 'md' | 'sm' | 'xs';
  type Shape = 'round' | 'circle' | 'none';
  type Status = 'success' | 'warning' | 'danger' | 'info';
  type FormLayout = 'horizontal' | 'vertical' | 'inline';
  type ControlSize = 'lg' | 'md' | 'sm';
  type MenuVariant = 'light' | 'dark' | 'themed' | 'transparent';
  type Direction = 'ltr' | 'rtl';
}
export interface ButtonProps
  extends CommonProps,
    Omit<ComponentPropsWithRef<'button'>, 'onClick'> {
  active?: boolean;
  block?: boolean;
  color?: string;
  disabled?: boolean;
  icon?: string | ReactNode;
  loading?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  size?: TypeAttributes.Size;
  variant?: 'solid' | 'twoTone' | 'plain' | 'default';
}

type ButtonColor = {
  bgColor: string;
  hoverColor: string;
  activeColor: string;
  textColor: string;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    active = false,
    block = false,
    children,
    className,
    color = '',
    disabled,
    icon,
    loading = false,
    size,
    variant = 'default',
    ...rest
  } = props;
  const defaultClass = 'button';
  const sizeIconClass = 'inline-flex items-center justify-center';

  const splitedColor = color?.split('-') || [];

  const buttonSize = size;
  const buttonColor = splitedColor[0];
  const buttonColorLevel = splitedColor[1];

  const [increaseLevel, decreaseLevel] = useColorLevel(
    buttonColorLevel as ColorLevel
  );

  const disabledClass = 'opacity-50 cursor-not-allowed';

  const solidColor = () => {
    const btn = {
      bgColor: active
        ? `bg-${buttonColor}-${increaseLevel}`
        : `bg-${buttonColor}-${buttonColorLevel}`,
      textColor: 'text-white',
      hoverColor: active ? '' : `hover:bg-${buttonColor}-${decreaseLevel}`,
      activeColor: `active:bg-${buttonColor}-${increaseLevel}`,
    };
    return getBtnColor(btn);
  };

  const twoToneColor = () => {
    const btn = {
      bgColor: active
        ? `bg-${buttonColor}-200 dark:bg-${buttonColor}-50`
        : `bg-${buttonColor}-50 dark:bg-${buttonColor}-500 dark:bg-opacity-20`,
      textColor: `text-${buttonColor}-${buttonColorLevel} dark:text-${buttonColor}-50`,
      hoverColor: active
        ? ''
        : `hover:bg-${buttonColor}-100 dark:hover:bg-${buttonColor}-500 dark:hover:bg-opacity-30`,
      activeColor: `active:bg-${buttonColor}-200 dark:active:bg-${buttonColor}-500 dark:active:bg-opacity-40`,
    };
    return getBtnColor(btn);
  };

  const defaultColor = () => {
    const btn = {
      bgColor: active
        ? `bg-gray-100 border border-gray-300 dark:bg-gray-500 dark:border-gray-500`
        : `bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700`,
      textColor: `text-gray-600 dark:text-gray-100`,
      hoverColor: active ? '' : `hover:bg-gray-50 dark:hover:bg-gray-600`,
      activeColor: `active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500`,
    };
    return getBtnColor(btn);
  };

  const plainColor = () => {
    const btn = {
      bgColor: active
        ? `bg-gray-100 dark:bg-gray-500`
        : 'bg-transparent border border-transparent',
      textColor: `text-gray-600 dark:text-gray-100`,
      hoverColor: active ? '' : `hover:bg-gray-50 dark:hover:bg-gray-600`,
      activeColor: `active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500`,
    };
    return getBtnColor(btn);
  };

  const getBtnColor = ({
    bgColor,
    hoverColor,
    activeColor,
    textColor,
  }: ButtonColor) => {
    return `${bgColor} ${
      disabled || loading ? disabledClass : hoverColor + ' ' + activeColor
    } ${textColor}`;
  };

  const getButtonSize = () => {
    let sizeClass = '';
    switch (buttonSize) {
      case SIZES.LG:
        sizeClass = classNames(
          `h-${CONTROL_SIZES.lg}`,
          icon && !children
            ? `w-${CONTROL_SIZES.lg} ${sizeIconClass} text-2xl`
            : 'px-8 py-2 text-base'
        );
        break;
      case SIZES.SM:
        sizeClass = classNames(
          `h-${CONTROL_SIZES.sm}`,
          icon && !children
            ? `w-${CONTROL_SIZES.sm} ${sizeIconClass} text-lg`
            : 'px-3 py-2 text-sm'
        );
        break;
      case SIZES.XS:
        sizeClass = classNames(
          `h-${CONTROL_SIZES.xs}`,
          icon && !children
            ? `w-${CONTROL_SIZES.xs} ${sizeIconClass} text-base`
            : 'px-3 py-1 text-xs'
        );
        break;
      default:
        sizeClass = classNames(
          `h-${CONTROL_SIZES.md}`,
          icon && !children
            ? `w-${CONTROL_SIZES.md} ${sizeIconClass} text-xl`
            : 'px-8 py-2'
        );
        break;
    }
    return sizeClass;
  };
  const btnColor = () => {
    switch (variant) {
      case 'solid':
        return solidColor();
      case 'twoTone':
        return twoToneColor();
      case 'plain':
        return plainColor();
      case 'default':
        return defaultColor();
      default:
        return defaultColor();
    }
  };

  const classes = classNames(
    defaultClass,
    btnColor(),
    getButtonSize(),
    className,
    block ? 'w-full' : ''
  );

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { onClick } = props;
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  return (
    <button ref={ref} className={classes} {...rest} onClick={handleClick}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;