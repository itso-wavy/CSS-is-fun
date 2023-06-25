import { useContext } from 'react';
import {
  withTheme,
  ThemeContext,
  useTheme,
  ThemeProvider,
  styled,
} from 'styled-components';

const Button = styled.button`
  display: block;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

const theme = {
  main: 'mediumseagreen',
};

export function ProvideTheme(props) {
  const themeContext = useContext(ThemeContext);
  // const newTheme = useTheme();

  return (
    <div className='board bg-slate-100'>
      <h2>2. Provide Theme</h2>
      <h3>1) withTheme</h3>
      {/* {console.log('Current theme1: ', props.theme)} */}
      <h3>2) useContext</h3>
      {console.log('Current theme2: ', themeContext)}
      <h3>3) useTheme</h3>
      {/* console.log('Current theme3: ', newTheme) */}

      <h3>- Example</h3>
      <Button theme={{ main: 'royalblue' }}>Ad hoc theme</Button>
      <ThemeProvider theme={theme}>
        <div>
          <Button>Themed</Button>
          <Button theme={{ main: 'darkorange' }}>Overridden</Button>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default withTheme(ProvideTheme);
