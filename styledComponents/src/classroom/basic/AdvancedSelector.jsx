import styled, { createGlobalStyle, css } from 'styled-components';

// 1) &: 부모 컴포넌트의 클래스 이름을 참조
const Thing = styled.div`
  color: #39e7ad;
  font-size: 1.1em;

  &:hover {
    font-weight: bolder;
  }
  &.something {
    background-color: #eaff9f;
  }
  .something-else & {
    /* 상위 선택자 */
    border: 3px solid #ffe031;
  }
`;

// 2) &&: 두 개 이상의 클래스를 조합할 때 사용
const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

const LabelText = styled.span`
  ${props => {
    switch (props.$mode) {
      case 'dark':
        return css`
          background-color: #0f172a;
          color: white;
          input:checked + && {
            color: #38bdf8;
          }
        `;
      default:
        return css`
          background-color: white;
          color: #0f172a;
          input:checked + && {
            color: #38bdf8;
          }
        `;
    }
  }}
`;

// 3) 우선순위 부스트: global < &&
const Thing2 = styled.div`
  && {
    color: blue;
  }
`;

const GlobalStyle = createGlobalStyle`
   div${Thing2} { // div인 Thing2, 이렇게 쓰는 사례가 있을까?!
     color: red;
   }
 `;

export default function AdvancedSelector() {
  return (
    <div className='board'>
      <h2>5. Advanced Selector✨</h2>
      <h3>
        1) <span>&</span>:{' '}
        <span className='font-medium'>
          구성 요소의 <span className='underline'>모든</span> 인스턴스
        </span>
      </h3>
      <Thing>things...</Thing>
      <Thing className='something'>things sibling</Thing>
      <div className='something-else'>
        <Thing>things sibling X</Thing>
      </div>

      <h3>
        2) <span className='point'>&&</span>:{' '}
        <span className='font-medium'>
          구성 요소의 <span className='underline'>특정</span> 인스턴스
        </span>
      </h3>
      <Label>
        <input type='checkbox' defaultChecked />
        <LabelText>no darkmode</LabelText>
      </Label>
      <Label>
        <input type='checkbox' defaultChecked />
        <LabelText $mode='dark'>darkmode</LabelText>
      </Label>

      <h3>
        3) <span className='point'>&&</span>:{' '}
        <span className='font-medium'> 우선 순위 부스트</span>
      </h3>
      <GlobalStyle />
      <Thing2>I'm blue(&&), not red(global)</Thing2>
    </div>
  );
}
