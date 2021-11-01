import { memo } from "react";
import styled from "styled-components";
import { MdCheck, MdClose } from "react-icons/md";
import PropTypes from "prop-types";
import { bp } from "../../styles/breakpoints";
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
