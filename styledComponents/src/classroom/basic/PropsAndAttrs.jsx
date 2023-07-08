import styled from 'styled-components';

// 1) props 유무에 따라 폰트 컬러 변경
// 참고: standard prop(표준 속성)이 아니면 dom으로 전달되지 않음
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.$inputColor || '#BF4F74'};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

// 2) attrs 메서드로 props 조작
const Input2 = styled.input.attrs(props => ({
  // attrs: 콜백 함수를 취하는 메서드, props를 받고 객체를 반환함
  type: 'text', // static props
  $size: props.$size || '1em', // dynamic props
}))`
  border: 2px solid #bf4f74;
  /* here we use the dynamically computed prop */
  padding: ${props => props.$size};
`;

// 3) attrs 오버라이딩
// Input's attrs will be applied first, and then overriding with this attrs obj
const NewInput = styled(Input2).attrs({
  type: 'password',
})`
  // similarly, border will override Input's border
  border: 2px solid #39e7ad;
`;

export default function PropsAndAttrs() {
  return (
    <div className='board '>
      <h2>3. PropsAndAttrs</h2>
      <h3>1) Passed props</h3>
      <Input defaultValue='standard input' />
      <Input defaultValue='custom input' $inputColor='rebeccapurple' />
      <h3>2) Attaching additional props✨</h3>
      <Input2 placeholder='A small text input' />
      <br />
      <Input2 placeholder='A bigger text input' $size='2em' />
      <h3>3) Overrinding Attrs</h3>
      <Input2 placeholder='A bigger text input' size='2em' />
      <br />
      {/* Notice we can still use the size attr from Input */}
      <NewInput placeholder='A bigger password input' size='2em' />
    </div>
  );
}
