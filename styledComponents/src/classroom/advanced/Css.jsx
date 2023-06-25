import styled from 'styled-components';

const Example = styled.div`
  padding: 2em 1em;
  background: papayawhip;

  &:hover {
    background: #bf4f74;
  }

  @media (max-width: 600px) {
    background: tomato;

    &:hover {
      background: yellow;
    }
  }

  > p {
    text-decoration: underline;
  }

  html.test & {
    display: none;
  }
`;

export default function CSS() {
  return (
    <div className='board bg-slate-100'>
      <h2>4. CSS</h2>
      <Example>
        <p>Hello World!</p>
      </Example>
    </div>
  );
}
