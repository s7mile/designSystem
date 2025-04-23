import cn from 'classnames';
import { ElementType } from 'react';
import st from './Typography.module.scss';
import { TypographyProps, TypographyType } from './type';

const createTypographyComponent = <T extends ElementType>(type: TypographyType) => {
  const Component = ({
    children,
    className,
    style,
    color = '#334155',
    fontWeight,
    textAlign,
    as,
  }: TypographyProps<T>) => {
    const TypographyElement = as || 'p';
    const inlineStyles = {
      ...style,
      ...(color && { '--color': color }),
      ...(fontWeight && { '--fontWeight': fontWeight }),
      ...(textAlign && { '--textAlign': textAlign }),
    };

    return (
      <TypographyElement
        className={cn(st[type], st.textContainer, className)}
        style={inlineStyles}
      >
        {children}
      </TypographyElement>
    );
  };
  return Component;
};

const Typography = {
  Heading1: createTypographyComponent('heading1'),
  Heading2: createTypographyComponent('heading2'),
  Title1: createTypographyComponent('title1'),
  Title2: createTypographyComponent('title2'),
  Title3: createTypographyComponent('title3'),
  Body1: createTypographyComponent('body1'),
  Body2: createTypographyComponent('body2'),
  Body3: createTypographyComponent('body3'),
  Body4: createTypographyComponent('body4'),
  Body5: createTypographyComponent('body5'),
  Body6: createTypographyComponent('body6'),
  Caption1: createTypographyComponent('caption1'),
  Caption2: createTypographyComponent('caption2'),
  Label: createTypographyComponent('label'),
};

export default Typography;
