import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Typography from '@/app/_components/atoms/Typography';
import Flex from '@/app/_components/atoms/Flex';

const meta: Meta<typeof Flex> = {
  title: 'Components/Flex',
  component: Flex,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Flex 컴포넌트는 방향, 정렬, 간격 등의 레이아웃 속성을 props로 받아 유연하게 아이템을 배치할 수 있도록 구성했습니다.<br />' +
          '- 모바일 First 로 구성되어 있으며 상황에따라 pc 에서 사용될 스타일을 props 로 받을 수 있습니다.<br />' +
          '- 기본형태는 `<Flex>` 이며 상황에 따라 `<Flex.Row/>`, `<Flex.Column/>` 로 사용 가능합니다..<br />',
      },
    },
  },
  argTypes: {
    className: {
      control: { type: 'text' },
      description:
        'Flex 컴포넌트에 대한 추가적인 css 설정이 필요한 경우 className 를 상속받아 스타일 자유롭게 수정가능',
    },
    style: {
      description:
        '동적스타일링을 위한 인라인스타일이 별도로 필요할 경우 사용 가능합니다. (ex-`style={{ --bg-color: light }}`)',
    },
    direction: {
      control: { type: 'select' },
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      description: 'Flex 방향 설정',
    },
    justify: {
      control: { type: 'select' },
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      description: '주 축 정렬',
    },
    align: {
      control: { type: 'select' },
      options: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
      description: '교차 축 정렬',
    },
    wrap: {
      control: { type: 'select' },
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      description: 'Flex 줄바꿈 설정',
    },
    gap: {
      control: 'text',
      description: '아이템 간 간격 (예: 16px, 1rem 등)',
    },
  },
};

export default meta;

type StoryType = StoryObj<typeof Flex>;

export const Default: StoryType = {
  render: (args) => (
    <Flex {...args}>
      <Typography.Body1>Item 1</Typography.Body1>
      <Typography.Body1>Item 2</Typography.Body1>
    </Flex>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '기본 Flex 컴포넌트 사용 예시입니다. 전달된 props에 따라 유동적으로 방향, 정렬, 간격 등을 조절할 수 있습니다.',
      },
    },
  },
};

export const Row: StoryType = {
  render: (args) => (
    <Flex.Row {...args}>
      <Typography.Body2>Row Item 1</Typography.Body2>
      <Typography.Body2>Row Item 2</Typography.Body2>
      <Typography.Body2>Row Item 3</Typography.Body2>
    </Flex.Row>
  ),
};

export const Column: StoryType = {
  render: (args) => (
    <Flex.Column {...args}>
      <Typography.Heading1>Column Item 1</Typography.Heading1>
      <Typography.Heading1>Column Item 2</Typography.Heading1>
      <Typography.Heading1>Column Item 3</Typography.Heading1>
    </Flex.Column>
  ),
};
