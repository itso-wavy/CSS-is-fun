import styled, { ThemeProvider } from 'styled-components';

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.fg */
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    fg: '#BF4F74',
  },
};

const theme = {
  fg: 'mediumseagreen',
  bg: 'white',
};

// 2) 함수형 테마
const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
});

export default function Theming() {
  return (
    <div className='board'>
      <h2>1. Theming</h2>
      <h3>1) Theme Provider</h3>
      <Button>Normal</Button>

      <ThemeProvider theme={theme}>
        <Button>Themed</Button>
      </ThemeProvider>

      <h3>2) Function themes(함수형 테마)</h3>
      <ThemeProvider theme={theme}>
        <div>
          <Button>Default Theme</Button>

          <ThemeProvider theme={invertTheme}>
            <Button>Inverted Theme</Button>
          </ThemeProvider>
        </div>
      </ThemeProvider>
    </div>
  );
}
