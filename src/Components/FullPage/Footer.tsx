import * as React from 'react';
import { Constants } from './FullPageConstants';

export interface IFooterProps {
  content: JSX.Element | (() => JSX.Element);
}

export const Footer: React.SFC<IFooterProps> = props => (
  <footer className={Constants.Classes.Footer}>
    {typeof props.content === 'function' ? props.content() : props.content}
  </footer>
);
