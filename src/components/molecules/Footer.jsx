import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const FooterContainer = styled.footer`
  margin-top: auto;
  display: flex;
  align-items: center;
  color: var(--white);
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
