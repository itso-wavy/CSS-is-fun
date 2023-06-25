import styled, { css, keyframes } from 'styled-components';

// Create the keyframes
const rotate = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
`;
// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

// ✅ 대안
const styles = css`
  animation: ${rotate} 2s linear infinite;
`;
const Rotate2 = styled.div`
  display: inline-block;
  ${styles};
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

export default function Animation() {
  return (
    <div className='board bg-zinc-100'>
      <h2>6. Animation</h2>
      <Rotate>&lt; 💅 &gt;</Rotate>
      <Rotate2>&lt; 💅 &gt;</Rotate2>
    </div>
  );
}
