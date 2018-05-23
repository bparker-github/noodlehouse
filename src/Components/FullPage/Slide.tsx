import * as React from 'react';
import { Constants } from './FullPageConstants';

export interface ISlideProps {
  id: string;
  content: string;
  styles?: React.CSSProperties;
}

export class Slide extends React.Component<ISlideProps> {
  render() {
    return (
      <div id={this.props.id} className={Constants.Classes.Slide} style={this.props.styles}>
        <div style={{ fontSize: '32px', fontWeight: 'bold' }}>{this.props.content}</div>
      </div>
    );
  }
}

// import * as React from 'react';

// export const enum SlideStyles {
//   Horiz = 'HorizontalSlide',
//   Verti = 'VerticalSlide'
// }

// export interface ISlideProps {
//   id: string;
//   shouldRender: boolean;
//   className: string;
//   width: number;
//   height: number;
//   horizontal: boolean;
//   horizontalSliderName: string;
//   style: React.CSSProperties;
// }

// export class Slide extends React.Component<ISlideProps> {
//   render() {
//     if (!this.props.shouldRender) {
//       return null;
//     }

//     const slideStyles: React.CSSProperties = Object.assign(
//       {
//         overflow: 'hidden',
//         width: `${this.props.width}px`,
//         height: `${this.props.height}px`
//       },
//       this.props.style || {}
//     );

//     const slideClassName =
//       (this.props.horizontal ? SlideStyles.Horiz : SlideStyles.Verti) +
//       (this.props.className ? ` ${this.props.className}` : '');

//     return (
//       <div
//         id={this.props.id}
//         className={slideClassName}
//         style={slideStyles}
//         {...{
//           'data-slide': this.props.horizontal ? SlideStyles.Horiz : SlideStyles.Verti,
//           'data-horizontal-slider': this.props.horizontalSliderName || null
//         }}
//       >
//         {this.props.children}
//       </div>
//     );
//   }
// }
