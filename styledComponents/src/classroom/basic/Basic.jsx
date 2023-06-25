import styled from 'styled-components';
// A static className will be generated for Title (important for SSR)
// import styled from 'styled-components/macro';

const Title = styled.h1`
  font-size: 1.5em;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  color: palevioletred;
  text-align: center;
  margin-bottom: 2em;
`;
const Button = styled.button`
  /* prop의 boolean 값을 기준으로 */
  background: ${props => (props.$primary ? '#BF4F74' : '#ffffff')};
  color: ${props => (!props.$primary ? '#BF4F74' : '#ffffff')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

export default function Basic() {
  return (
    <div className='board'>
      <Wrapper>
        <Title>Hello World,</Title>
        <strong>this is my first styled component!</strong>
      </Wrapper>

      <div>
        <h2>1. Based On Props</h2>
        <Button>Normal</Button>
        <Button $primary>Primary</Button>
      </div>
    </div>
  );
}
