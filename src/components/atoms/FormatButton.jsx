import styled from "styled-components";

function FormatButton({ target }) {
  const { handleChangeFormat } = useContext(ColorContext);

  return (
    <Tooltip content={<p>Change color format</p>} offset={[-40, 14]} trigger="mouseenter focusin">
      <Button onClick={() => handleChangeFormat(target)} aria-label="Change color format">
        <MdColorLens size={24} />
      </Button>
    </Tooltip>
  );
}

FormatButton.propTypes = {
  target: PropTypes.oneOf(["background", "foreground"]).isRequired,
};

export default FormatButton;
