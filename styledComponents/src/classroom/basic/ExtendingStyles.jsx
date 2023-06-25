import styled from 'styled-components';

const Button = styled.button`
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

const NewButton = styled(Button)`
  color: teal;
  border-color: teal;
`;

// This could be react-router-dom's Link for example
const Link = ({ className, children }) => (
  <a className={className} href='/'>
    {children}
  </a>
);

const StyledLink = styled(Link)`
  color: teal;
  font-weight: bold;
`;

const ReversedButton = props => (
  <Button {...props} children={props.children.split('').reverse()} />
);

export default function ExtendingStyles() {
  return (
    <div className='board bg-zinc-100'>
      <h2>2. Extending Styles</h2>
      <h3>1) "styled.div"</h3>
      <Button>Normal Button</Button>
      <NewButton>Tomato Button</NewButton>
      <br />

      <h3>
        2) "styled<span className='point'>(MyComponent)</span>"
        third-party(custom) components
      </h3>
      <Link>Unstyled, boring Link(from react-router-dom)</Link>
      <br />
      <StyledLink>Styled, exciting Link(from react-router-dom)</StyledLink>
      <br />

      <h3>
        3) <span className='point'>"as"</span> polymorphic prop
      </h3>
      <Button as='a' href='/'>
        Anker tag like button
      </Button>
      <NewButton as='a' href='/'>
        Anker tag with NewButton styles
      </NewButton>
      <br />

      <h3>4) "as" with custom components</h3>
      <Button>Normal Button</Button>
      <NewButton as={ReversedButton} className='bg-blue-200 hover:bg-blue-300'>
        Custom Button with Normal Button styles
      </NewButton>
    </div>
  );
}
