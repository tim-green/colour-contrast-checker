import styled from "styled-components";

const SkipLink = styled.a`
  padding: 1.2rem;
  position: absolute;
  top: -6rem;
  background-color: var(--greeny);
  border-radius: 0.5rem;
  color: var(--black);
  font-size: 1.6rem;
  font-weight: 600;
  z-index: 999;
  transition: transform .15s ease;

  &:focus, &:active {
    transform: translateY(120%);
    outline: none;
  }

  &:hover{
    text-decoration: underline 2px var(--forest);
    color: var(--deep-black);
  }
`;

export default SkipLink;
