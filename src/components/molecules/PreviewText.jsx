import styled from "styled-components";
function PreviewText({ children, title, largeText = false }) {
  return (
    <Container isLargeText={largeText}>
      <Title>{title}</Title>
      <Text>{children}</Text>
    </Container>
  );
}

PreviewText.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string,
  largeText: PropTypes.bool,
};

export default PreviewText;
