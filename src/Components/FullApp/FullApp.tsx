import * as React from 'react';
import { FullPage } from '../FullPage/FullPage';
import { ISlideProps } from '../FullPage/Slide';

import './styles.scss';
import '@blueprintjs/core/lib/css/blueprint.css';

export class FullApp extends React.Component {
  render() {
    const slidesConfig: ISlideProps[] = [
      { id: '0', content: 'You so', styles: { backgroundColor: '#ffb0b0' } },
      { id: '1', content: 'fuckin', styles: { backgroundColor: '#f6f3b4' } },
      { id: '2', content: 'prescious', styles: { backgroundColor: '#dbf9b9' } },
      { id: '3', content: 'when you', styles: { backgroundColor: '#c8e2f2' } },
      { id: '4', content: 'smile', styles: { backgroundColor: '#d9c0ec' } }
    ];
    return <FullPage slideConfigs={slidesConfig} />;
  }
}
