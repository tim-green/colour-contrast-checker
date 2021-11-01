import styled from "styled-components";
function OutlineButton({ anchor, children, color, hoverColor, hrefLink, icon, onClickEvent }) {
  // Additional props if we cast the button into an anchor tag
  const anchorProps = anchor
    ? {
        as: "a",
        href: hrefLink,
        target: "_blank",
        rel: "noreferrer",
      }
    : {};

  return (
    <Button
      {...anchorProps}
      anchor={anchor}
      foreground={color}
      hoverColor={hoverColor}
      hasIcon={icon !== undefined}
      onClick={onClickEvent}
    >
      {icon}
      <span>{children}</span>
    </Button>
  );
}

OutlineButton.propTypes = {
  anchor: PropTypes.bool,
  children: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  hrefLink: PropTypes.string,
  icon: PropTypes.node,
  onClickEvent: PropTypes.func,
};

OutlineButton.defaultProps = {
  anchor: false,
  color: "var(--white)",
};

export default OutlineButton;
