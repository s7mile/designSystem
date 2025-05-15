export type TColor = 'blue' | 'green' | 'orange' | 'grey1' | 'grey2' | 'grey3' | 'grey4';

export type TSize = 'big' | 'small';

export interface ButtonProps {
  children: React.ReactNode;
  color: TColor;
  size?: TSize;
  width?: string;
  height?: string;
  radius?: string;
  style?: React.CSSProperties;
  className?: string;
}
