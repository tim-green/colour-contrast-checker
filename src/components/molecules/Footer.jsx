import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const FooterContainer = styled.footer`
  margin-top: auto;
  display: flex;
  align-items: center;
  color: var(--white);
`;

const GitHubLink = styled.a`
  color: var(--white);
  transition: 150ms ease;

  &:hover,
  &:focus {
    color: var(--greeny);
  }
`;

const Text = styled.p`
  padding-left: 0;
  margin-left: 6%;
  color: var(--gray);
  font-size: 1.4rem;
  @media (max-width: 1080px) {
    margin-left: 2%;
  }
  
`;

const TextLink = styled.a`
  position: relative;
  color: var(--greeny);

  // Animated underline effect on hover
  &::after {
    content: "";
    width: 100%;
    height: 0.1rem;
    position: absolute;
    bottom: 0.1rem;
    left: 0;
    right: 0;
    background-color: var(--greeny);
    transform: scaleX(0);
    transition: .15s ease;
  }

  &:hover,
  &:focus {
    &::after {
      transform: scaleX(1);
      transition: .15s ease-in;
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      {/* github link */}
      <GitHubLink
        title="Clone this on GitHub"
        href="https://github.com/tim-green/colour-contrast-checker"
        target="_blank"
        rel="noreferrer"
      >
       {/* //fontawesome icon */}
       <FaGithub size={32} />
      </GitHubLink>
      {/* coded by */}
      <Text>
        
        <TextLink href="https://www.timgreen.ws/" target="_blank" rel="noreferrer">
          Tim Green
        </TextLink>
        {" "}= The person who built this tool{" "}
      </Text>
    </FooterContainer>
  );
}
