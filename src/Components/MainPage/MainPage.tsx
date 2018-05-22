import * as React from 'react';
import { Title } from '../Title/Title';

import './MainPage.scss';

export class MainPage extends React.Component {
  render() {
    return (
      <div className="mp-outer">
        <Title title="Welcome" subtitle="to the Main Stage." />
      </div>
    );
  }
}
