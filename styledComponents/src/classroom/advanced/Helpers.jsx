import styled, {
  createGlobalStyle,
  ThemeProvider,
  css,
  keyframes,
} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  code {
    color: ${props => (props.$color ? 'blue' : 'black')};
    font-family: ${props => props.theme.fontFamily};
  }
`;

// 2) css
const complexMixin = css`
  color: ${props => (props.$color ? 'green' : 'black')};
`;
const StyledCmp = styled.div`
  /* This is an example of a nested interpolation */
  ${props => (props.$complex ? complexMixin : 'color: blue;')}
`;

// 3) keyframes
const pulse = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;
const PulseButton = styled.button`
  animation: 3s ${pulse} ease-out infinite alternate;
  font-size: 2em;
`;
// css+keyframes
// const animation = props =>
//   css`
//     ${props.$animationLength} ${pulse} ease-out infinite alternate;
//   `;
// const PulseButton = styled.button`
//   animation: ${animation};
// `;

export default function Helpers() {
  // https://styled-components.com/docs/api#createglobalstyle

  return (
    <div className='board border-8 border-emerald-200'>
      <h2>5. Helpers✨</h2>
      <h3>1) createGlobalStyle</h3>
      <ThemeProvider theme={{ fontFamily: 'math' }}>
        <GlobalStyle $color />
        <code>some code...</code>
      </ThemeProvider>
      <h3>
        2) css: 보간(코드 분리)을 사용하여 템플릿 리터럴에서 CSS를 생성하는
        도우미 함수
      </h3>
      <StyledCmp $complex $color>
        css props...
      </StyledCmp>
      <h3>3) keyframes</h3>
      <PulseButton>🍕</PulseButton>
    </div>
  );
}
