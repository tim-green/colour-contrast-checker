import styled from "styled-components";

function CopyButton({ target }) {
  const handleClick = (event) => {
    const colorInput = document.getElementById(target).value;
    copyToClipboard(colorInput);
    event.currentTarget.blur();
  };

  return (
    <Tooltip
      content={<p>Copied to clipboard</p>}
      trigger="click"
      offset={[-40, 14]}
      onShow={(instance) => setTimeout(() => instance.hide(), 2000)}
      hideOnClick={false}
    >
      <Button onClick={handleClick} aria-label="Copy to clipboard">
        <MdContentCopy size={24} />
      </Button>
    </Tooltip>
  );
}

CopyButton.propTypes = {
  target: PropTypes.oneOf(["background", "foreground"]).isRequired,
};

export default CopyButton;
