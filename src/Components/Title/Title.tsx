import * as React from 'react';

import './Title.css';

export interface ITitleProps {
  title: string;
  subtitle?: string;
}

export class Title extends React.Component<ITitleProps> {
  render () {
    return (
      <div className="title-outer">
        <h2 className="title-title">{this.props.title}</h2>
        {this.props.subtitle && <h4 className="title-subtitle">{this.props.subtitle}</h4>}
      </div>
    );
  }
}
