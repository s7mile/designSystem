import { StoryObj } from '@storybook/react';
import { ElementType } from 'react';

export interface TypographyProps<T extends ElementType> {
  children: string;
  className?: string;
  style?: React.CSSProperties;
  as?: T;
  color?: string;
  fontWeight?: number;
  textAlign?: string;
}
export type TypographyType =
  | 'heading1'
  | 'heading2'
  | 'title1'
  | 'title2'
  | 'title3'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4'
  | 'body5'
  | 'body6'
  | 'caption1'
  | 'caption2'
  | 'label';

/* storybook type 별칭권장
공식문서 : https://storybook.js.org/docs/writing-stories/typescript
*/
export type StoryType = StoryObj<{
  render: (args: Omit<TypographyProps<'p'>, 'as'>) => JSX.Element;
}>;
