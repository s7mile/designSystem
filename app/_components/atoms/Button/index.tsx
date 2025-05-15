import cn from 'classnames';
import React, { memo } from 'react';
import { ButtonProps } from '@/app/_components/atoms/Button/type';
import { getBtnStyle } from '@/app/_components/atoms/Button/util';
import st from './Button.module.scss';

const Button = ({
  children,
  color = 'blue',
  size = 'big',
  width,
  height,
  radius,
  className,
  ...props
}: Omit<ButtonProps, 'button'>) => {
  return (
    <button
      type="button"
      className={cn(
        st['button'],
        size && st[size], // 라지사이즈인지 스몰사이즈인지. size 없이 width/height로 커스텀도 가능
        st[color],
        className,
      )}
      style={{
        ...getBtnStyle(width, height, radius, size),
        ...props.style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};
export default memo(Button);
