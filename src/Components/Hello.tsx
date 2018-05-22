import * as React from 'react';

export interface IHelloProps {
  name: string;
}

export class Hello extends React.Component<IHelloProps> {
  render() {
    return <h2>Hello {this.props.name}.</h2>;
  }
}
