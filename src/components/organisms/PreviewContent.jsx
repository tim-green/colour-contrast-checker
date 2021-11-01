import styled from "styled-components";
import { MdOpenInNew } from "react-icons/md";
import OutlineButton from "../atoms/OutlineButton";
import ContrastRatio from "../molecules/ContrastRatio";
import PreviewText from "../molecules/PreviewText";
import WcagResults from "../molecules/WcagResults";
import { bp } from "../../styles/breakpoints";

const Container = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${bp.lg}) {
    max-width: none;
    width: 100%;
  }
`;

export default function PreviewContent() {
  return (
    <Container id="preview">
      <h1>Colour Contrast Checker</h1>
      <Results>
        <ContrastRatio />
        <WcagResults />
      </Results>
      <Preview>
        <PreviewText largeText title="Large Text - 24px/18pt">
        The contrast ratio is a measure of the difference in perceived brightness between two colours. The higher the ratio, the better the contrast.
        </PreviewText>
        <PreviewText title="Normal Text - 16px">
        According to Web Content Accessibility Guidelines (WCAG) 2.0, text and images of text should have a minimum contrast ratio of 4.5:1 (Level AA), while large text should have a minimum contrast ratio of 3:1. For enhanced contrast (Level AAA), normal text and large text should have a minimum contrast ratio of 7:1 and 4.5:1 respectively.
        </PreviewText>
        <Links>
          <OutlineButton
            anchor
            hrefLink="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html"
            color="var(--foreground)"
            icon={<MdOpenInNew size={18} />}
          >
            WCAG 2.0
          </OutlineButton>
          <OutlineButton
            anchor
            hrefLink="https://webaim.org/articles/contrast/"
            color="var(--foreground)"
            icon={<MdOpenInNew size={18} />}
          >
            WebAIM article
          </OutlineButton>
        </Links>
      </Preview>
    </Container>
  );
}
