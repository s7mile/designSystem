import Flex from '@/app/_components/atoms/Flex';
import Typography from '@/app/_components/atoms/Typography';
import ThemeButton from '@/app/_components/template/Home/ThemeButton';
import Link from 'next/link';

export default function HomeTemplate() {
  return (
    <>
      <Flex as="header">
        <Typography.Heading1 as={'h1'}>연습</Typography.Heading1>
        <nav>
          <Flex as="ul" align="center" gap={10}>
            <li>
              <Link href="/">리스트1</Link>
            </li>
            <li>
              <Link href="/">리스트2</Link>
            </li>
          </Flex>
        </nav>
        <ThemeButton />
      </Flex>
    </>
  );
}
