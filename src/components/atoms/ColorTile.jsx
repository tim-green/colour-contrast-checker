import styled from "styled-components";
import PropTypes from "prop-types";
import { MdClose } from "react-icons/md";

function ColorTile({ background, foreground, handleLoad, handleDelete }) {
  return (
    <Container>
      <TileBtn
        bg={background}
        fg={foreground}
        onClick={handleLoad}
        aria-label={`Background ${background} with foreground ${foreground}`}
      >
        Aa
      </TileBtn>
      <DeleteBtn onClick={handleDelete} aria-label="Delete saved color">
        <MdClose size={12} />
      </DeleteBtn>
    </Container>
  );
}

ColorTile.propTypes = {
  background: PropTypes.string.isRequired,
  foreground: PropTypes.string.isRequired,
  handleLoad: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default ColorTile;
