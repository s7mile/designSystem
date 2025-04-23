import React from 'react';
import styles from './Flex.module.scss';
import { FlexProps } from './type';

const Flex = ({
  children,
  className = '',
  style,
  as,
  direction = 'row',
  justify = 'flex-start',
  align = 'stretch',
  gap = 0,
  wrap = 'nowrap',
  pcDirection,
  pcJustify,
  pcAlign,
  pcGap = 0,
  pcWrap,

  ...eventHandlers
}: FlexProps) => {
  const FlexElement = as || 'div';
  const classNames = [
    styles.flex,
    // 모바일
    direction && styles[`direction-${direction}`],
    justify && styles[`justify-${justify.replace(' ', '_')}`],
    align && styles[`align-${align}`],
    wrap && styles[`wrap-${wrap}`],
    // PC
    pcDirection && styles[`pc-direction-${pcDirection}`],
    pcJustify && styles[`pc-justify-${pcJustify.replace(' ', '_')}`],
    pcAlign && styles[`pc-align-${pcAlign}`],
    pcWrap && styles[`pc-wrap-${pcWrap}`],
    className,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();

  const inlineStyles: React.CSSProperties = {
    '--flex-gap': `${gap}px`,
  };
  if (pcGap > 0) {
    inlineStyles['--flex-gap-pc'] = `${pcGap}px`;
  }

  return (
    <FlexElement
      className={classNames}
      style={{ ...style, ...inlineStyles }}
      {...eventHandlers}
    >
      {children}
    </FlexElement>
  );
};

const Row = ({ direction = 'row', ...rest }: FlexProps) => {
  return <Flex {...rest} direction={direction} />;
};
const Column = ({ direction = 'column', ...rest }: FlexProps) => {
  return <Flex {...rest} direction={direction} />;
};

Flex.Row = Row;
Flex.Column = Column;

export default Flex;
