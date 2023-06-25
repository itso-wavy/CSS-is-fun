import React from 'react';

import Basic from './classroom/basic/Basic';
import ExtendingStyles from './classroom/basic/ExtendingStyles';
import PropsAndAttrs from './classroom/basic/PropsAndAttrs';
import ExampleRecommended from './classroom/basic/ExampleRecommended';
import AdvancedSelector from './classroom/basic/AdvancedSelector';
import Animation from './classroom/basic/Animation';
import Theming from './classroom/advanced/Theming';
import ProvideTheme from './classroom/advanced/ProvideTheme';
import TaggedTemplateLiterals from './classroom/advanced/TaggedTemplateLiterals';
import Css from './classroom/advanced/Css';
import Helpers from './classroom/advanced/Helpers';

/* A static className will be generated for Title (important for SSR)
import styled from 'styled-components/macro'; */

export default function App() {
  return (
    <>
      <h1>{`<Basic>`}</h1>
      <Basic />
      <ExtendingStyles />
      <PropsAndAttrs />
      <ExampleRecommended />
      <AdvancedSelector />
      <Animation />

      <h1>{`<Advanced>`}</h1>
      <Theming />
      <ProvideTheme />
      <TaggedTemplateLiterals />
      <Css />
      <Helpers />
    </>
  );
  // 변수 표시 ${Thing2}
}
