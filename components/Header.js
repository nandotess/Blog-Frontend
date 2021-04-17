import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.header`
  padding: 5rem 0 0;
`;

const Title = styled.h2`
  cursor: pointer;
  font-size: 6rem;
  margin-bottom: 0;
`;

export default function Header() {
  return (
    <Wrapper>
      <Link href="/" passHref={true}>
        <Title>Blog</Title>
      </Link>
    </Wrapper>
  );
}
