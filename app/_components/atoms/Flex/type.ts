export interface FlexStyleProps {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  gap?: number;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';

  // PC 미디어쿼리를 위한 props
  pcDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  pcJustify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  pcAlign?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  pcGap?: number;
  pcWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}
export type EventHandlers = {
  [K in keyof React.DOMAttributes<HTMLElement>]?: React.DOMAttributes<HTMLElement>[K];
};

export interface FlexProps extends FlexStyleProps, EventHandlers {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof HTMLElementTagNameMap;
}
