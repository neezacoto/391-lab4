import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.h2`
  padding: 0.5rem;
  margin: 1rem;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Title>React Introduction</Title>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </StyledHeader>
  );
}
