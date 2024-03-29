import { memo } from "react";
import styled from "styled-components";
import { MdCheck, MdClose } from "react-icons/md";
import PropTypes from "prop-types";
import { bp } from "../../styles/breakpoints";

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.pass ? "var(--green)" : "var(--light-red)")};
  color: ${(props) => (props.pass ? "var(--deep-black)" : "var(--deep-black)")};
  border-radius: .4rem;
  padding: 0.3rem 0.7rem;
`;

const Text = styled.p`
  margin-left: 0.3rem;
  font-size: 2.4rem;
  font-weight: 600;
  text-align: center;

  @media (max-width: ${bp.md}) {
    font-size: 2.2rem;
  }
`;

function Rating({ pass }) {
  return (
    <Container pass={pass}>
      {pass ? <MdCheck size={28} /> : <MdClose size={28} />}
      <Text>{pass ? "Pass" : "Fail"}</Text>
    </Container>
  );
}

Rating.propTypes = {
  pass: PropTypes.bool.isRequired,
};

export default memo(Rating);
