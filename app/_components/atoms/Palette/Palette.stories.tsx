import React, { Fragment } from 'react';
import type { Meta } from '@storybook/react';
import Flex from '@/app/_components/atoms/Flex';
import Typography from '@/app/_components/atoms/Typography';
import palettes from '@/app/_components/atoms/Palette/utils';
import st from './PaletteColor.module.scss';

export default {
  title: 'Palette',
  component: Flex,
} as Meta;

interface PaletteProps {
  name: string;
  light: string;
  dark: string;
}
const PaletteItem = ({ name, light, dark }: PaletteProps) => (
  <Flex.Column className={st['palette-color']} as="section">
    <Flex.Column
      align="center"
      justify="center"
      gap={4}
      className={`${st['palette-color-light-item']} ${st['palette-color-item']}`}
      style={{ '--bg-color': light }}
    >
      <Typography.Body5 color={'#334155'} fontWeight={600}>
        {name}
      </Typography.Body5>
      <Typography.Body5
        fontWeight={600}
        className={st['palette-name']}
        textAlign={'center'}
      >
        {light}
      </Typography.Body5>
    </Flex.Column>

    <Flex.Column
      align="center"
      justify="center"
      className={`${st['palette-color-dark-item']} ${st['palette-color-item']}`}
      style={{ '--bg-color': dark }}
    >
      <Typography.Body5 c={'#334155'} fw={500}>
        {name}
      </Typography.Body5>
      <Typography.Body5
        textAlign={'center'}
        color={'#334155'}
        fontWeight={500}
        className={st['palette-name']}
      >
        {dark}
      </Typography.Body5>
    </Flex.Column>
  </Flex.Column>
);

export const Palette = () => (
  <Flex.Column gap={10} pcGap={30}>
    {Object.entries(palettes).map(([category, values]) => (
      <Fragment key={category}>
        <Typography.Title2 fontWeight={700}>{category}</Typography.Title2>
        <Flex.Row wrap={'wrap'} gap={4}>
          {values.map((color) => (
            <PaletteItem key={color.name} {...color} />
          ))}
        </Flex.Row>
      </Fragment>
    ))}
  </Flex.Column>
);
