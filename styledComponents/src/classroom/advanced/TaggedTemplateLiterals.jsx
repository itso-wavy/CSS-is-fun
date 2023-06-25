import { styled } from 'styled-components';

const Title = styled.p`
  ${props => props.$upsideDown && 'transform: rotate(180deg);'}
  text-align: center;
`;

export default function TaggedTemplateLiterals() {
  return (
    <div className='board'>
      <h2>3. TaggedTemplateLiterals</h2>
      <div className='p-4 space-y-1 bg-orange-100'>
        <p>"const foo = 'good';</p>
        <p>fn`some string here` === fn(['some string here']);</p>
        <p>fn`this is a ${'foo'} day` === fn(['this is a ', ' day'], foo);"</p>
      </div>

      <h3>- Example</h3>
      <Title>HELLO</Title>
      <Title $upsideDown>WORLD</Title>
    </div>
  );
}
