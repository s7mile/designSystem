import React from 'react';
import type { Meta } from '@storybook/react';
import Flex from '@/app/_components/atoms/Flex';
import Typography from '@/app/_components/atoms/Typography';
import { StoryType, TypographyProps } from '@/app/_components/atoms/Typography/type';

const meta: Meta<typeof Typography.Heading1> = {
  title: 'Components/Typography',
  component: Typography.Heading1,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `제플린 정의된 스타일가이드를 기반으로 Typography 컴포넌트를 추가했습니다.  
        [🔗 Zeplin 가이드 링크](https://app.zeplin.io/project/642b802836744e7529ff55cb/screen/6780bc1ba4c54cfecdd6ec8c?diff=true)
        `,
      },
    },
  },
  argTypes: {
    className: {
      control: { type: 'text' },
      description:
        'Typography 컴포넌트에 대한 추가적인 css 설정이 필요한 경우 className 를 상속받아 스타일 자유롭게 수정가능',
    },
    style: {
      description:
        '동적스타일링을 위한 인라인스타일이 별도로 필요할 경우 사용 가능합니다. (ex-`style={{ --color: light }}`)',
    },
    as: {
      description: '태그 커스텀 설정',
      defaultValue: 'p',
    },
    color: {
      control: { type: 'color' },
      description: '텍스트 컬러 설정',
    },
    fontWeight: {
      control: { type: 'range', min: 300, max: 800, step: 100 },
      description: '텍스트 굵기를 설정(300~800)',
    },
    textAlign: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'unset'],
      description: '텍스트 위치 설정',
    },
  },
};

export default meta;

export const Default: StoryType = {
  render: (args) => <TypographyStory {...args} />,
  args: {
    children: '타이포그라피 스타일',
  },
};
export const Heading1: StoryType = {
  args: {
    children: '타이포그라피 스타일',
  },
};
export const Heading2: StoryType = {
  render: (args) => <Typography.Heading2 {...args} />,
  args: {
    children: '타이포그라피 스타일',
  },
};
export const Title1: StoryType = {
  render: (args) => <Typography.Title1 {...args} />,
  args: {
    children: '타이포그라피 스타일',
  },
};
export const Title2: StoryType = {
  render: (args) => <Typography.Title2 {...args} />,
  args: {
    children: '타이포그라피 스타일',
  },
};
export const Title3: StoryType = {
  render: (args) => <Typography.Title3 {...args} />,
  args: {
    children: '타이포그라피 스타일',
  },
};
export const Body1: StoryType = {
  render: (args) => <Typography.Body1 {...args} />,
  args: {
    children: '타이포그라피 스타일',
  },
};
export const Body2: StoryType = {
  render: (args) => <Typography.Body2 {...args} />,
  args: {
    children: '타이포그라피 스타일',
  },
};
export const Body3: StoryType = {
  render: (args) => <Typography.Body3 {...args} />,
  args: {
    children: '타이포그라피 스타일',
  },
};
export const Body4: StoryType = {
  render: (args) => <Typography.Body4 {...args} />,
  args: {
    children: '타이포그라피 스타일',
  },
};
export const Body5: StoryType = {
  render: (args) => <Typography.Body5 {...args} />,
  args: {
    children: '타이포그라피 스타일',
  },
};
export const Body6: StoryType = {
  render: (args) => <Typography.Body6 {...args} />,
  args: {
    children: '타이포그라피 스타일',
  },
};
export const Caption1: StoryType = {
  render: (args) => <Typography.Caption1 {...args} />,
  args: {
    children: '타이포그라피 스타일',
  },
};
export const Caption2: StoryType = {
  render: (args) => <Typography.Caption2 {...args} />,
  args: {
    children: '타이포그라피 스타일',
  },
};
export const Label: StoryType = {
  render: (args) => <Typography.Label {...args} />,
  args: {
    children: '타이포그라피 스타일',
  },
};

const TypographyStory = ({
  children,
  className,
  color,
  fontWeight,
  textAlign,
}: Omit<TypographyProps<'p'>, 'as'>) => {
  return (
    <Flex.Column gap={8}>
      <Flex.Column>
        <Typography.Heading1
          color={color}
          fontWeight={fontWeight}
          textAlign={textAlign}
          className={className}
        >
          {children}
        </Typography.Heading1>
        <Typography.Heading2
          color={color}
          fontWeight={fontWeight}
          textAlign={textAlign}
          className={className}
        >
          {children}
        </Typography.Heading2>
      </Flex.Column>

      <Flex.Column gap={8}>
        <Typography.Title1
          color={color}
          fontWeight={fontWeight}
          textAlign={textAlign}
          className={className}
        >
          {children}
        </Typography.Title1>
        <Typography.Title2
          color={color}
          fontWeight={fontWeight}
          textAlign={textAlign}
          className={className}
        >
          {children}
        </Typography.Title2>
        <Typography.Title3
          color={color}
          fontWeight={fontWeight}
          textAlign={textAlign}
          className={className}
        >
          {children}
        </Typography.Title3>
      </Flex.Column>

      <Flex.Column gap={8}>
        <Typography.Body1
          color={color}
          fontWeight={fontWeight}
          textAlign={textAlign}
          className={className}
        >
          {children}
        </Typography.Body1>
        <Typography.Body2
          color={color}
          fontWeight={fontWeight}
          textAlign={textAlign}
          className={className}
        >
          {children}
        </Typography.Body2>
        <Typography.Body3
          color={color}
          fontWeight={fontWeight}
          textAlign={textAlign}
          className={className}
        >
          {children}
        </Typography.Body3>
        <Typography.Body4
          color={color}
          fontWeight={fontWeight}
          textAlign={textAlign}
          className={className}
        >
          {children}
        </Typography.Body4>
        <Typography.Body5
          color={color}
          fontWeight={fontWeight}
          textAlign={textAlign}
          className={className}
        >
          {children}
        </Typography.Body5>
        <Typography.Body6
          color={color}
          fontWeight={fontWeight}
          textAlign={textAlign}
          className={className}
        >
          {children}
        </Typography.Body6>
      </Flex.Column>

      <Flex.Column gap={8}>
        <Typography.Caption1
          color={color}
          fontWeight={fontWeight}
          textAlign={textAlign}
          className={className}
        >
          {children}
        </Typography.Caption1>
        <Typography.Caption2
          color={color}
          fontWeight={fontWeight}
          textAlign={textAlign}
          className={className}
        >
          {children}
        </Typography.Caption2>
        <Typography.Label
          color={color}
          fontWeight={fontWeight}
          textAlign={textAlign}
          className={className}
        >
          {children}
        </Typography.Label>
      </Flex.Column>
    </Flex.Column>
  );
};
