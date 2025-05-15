import { TSize } from '@/app/_components/atoms/Button/type';
import { CSSProperties } from 'react';

export const getBtnStyle = (
  width: CSSProperties['width'],
  height: CSSProperties['height'],
  radius: CSSProperties['borderRadius'],
  size?: TSize,
) => {
  const style = {
    '--width': width,
    '--max-width': 'auto',
    '--height': height,
    '--radius': radius || (size === 'big' ? '8px' : '6px'),
  };

  return style;
};
