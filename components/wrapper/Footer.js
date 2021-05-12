import styled from 'styled-components';

const Wrapper = styled.footer`
  color: var(--color-gray);
  font-size: 1.1rem;
  padding: 0 0 5rem;
`;

export default function Footer() {
  return (
    <Wrapper>
      <p>
        Built with ♥ by Fernando Tessmann
        <br />
        <a href="https://github.com/nandotess/blog" target="_blank">
          Source Code
        </a>
      </p>
    </Wrapper>
  );
}
