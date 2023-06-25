import { useState } from 'react';
import styled from 'styled-components';

// 스타일 구성요소를 렌더 메서드 외부에 정의하는 것이 중요
const StyledCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;
const Paragraph = styled.p`
  /* ... */
`;
const Button = styled.button`
  background-color: #fff;
  width: 1em;
  height: 1em;
  line-height: 0;
  font-size: 1.8em;
  border: 1px solid #8080808f;
  border-radius: 3px;
`;

export default function ExampleRecommended() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count => count + 1);
  };
  const decrement = () => {
    setCount(count => count - 1);
  };

  return (
    <div className='board bg-zinc-100'>
      <h2>4. Example Recommended</h2>
      <StyledCounter>
        <Button onClick={increment}>+</Button>
        <Paragraph>{count}</Paragraph>
        <Button onClick={decrement}>-</Button>
      </StyledCounter>
    </div>
  );
}
