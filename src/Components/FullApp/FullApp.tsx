import * as React from 'react';
import { FullPage } from '../FullPage/FullPage';
import { ISlideProps } from '../FullPage/Slide';

import './styles.scss';

export class FullApp extends React.Component {
  render() {
    const slidesConfig: ISlideProps[] = [
      { content: 'You so', backgroundColor: '#ffb0b0' },
      { content: 'fuckin', backgroundColor: '#f6f3b4' },
      { content: 'prescious', backgroundColor: '#dbf9b9' },
      { content: 'when you', backgroundColor: '#c8e2f2' },
      { content: 'smile', backgroundColor: '#d9c0ec' }
    ];
    return <FullPage slideConfigs={slidesConfig} />;
  }
}
