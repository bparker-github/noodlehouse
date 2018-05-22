// import * as React from 'react';
// import { Slide, ISlideProps, SlideStyles } from './Slide';
// import { FullPageUtils } from './FullPageUtils';

// export interface IHorizontalSlide extends ISlideProps {
//   name: string;
//   slides: Slide[];
//   hideScrollbars: boolean;
//   cache: (slide: HorizontalSlider) => void;
//   activeSlide: number;
// }

// export class HorizontalSlider extends React.Component<IHorizontalSlide> {
//   private name: string;
//   private node: HTMLDivElement | null;

//   constructor(props: IHorizontalSlide) {
//     super(props);
//     this.name = this.props.name;
//   }

//   componentDidMount() {
//     this.props.cache(this);
//     const nodes = FullPageUtils.getNodes(document, `data-horizontal-slider="${this.props.name}"`);
//     FullPageUtils.hideAllButActive(this.props.activeSlide, nodes);
//   }

//   render() {
//     const horizClassName = (this.props.className ? `${this.props.className} ` : '') + SlideStyles.Horiz;
//     const overflowX = this.props.hideScrollbars ? 'hidden' : 'auto';
//     const overflowY = overflowX;

//     const horizSliderStyle: React.CSSProperties = Object.assign({}, this.props.style, {
//       height: `${this.props.height}px`,
//       width: `${this.props.width}px`,
//       position: 'relative',
//       overflowX,
//       overflowY,
//       whiteSpace: 'nowrap',
//       padding: '0',
//       margin: '0'
//     });
//     const horizSlideStyle: React.CSSProperties = { overflow: 'hidden', whiteSpace: 'normal', display: 'inline-block' };

//     return (
//       <div
//         ref={node => (this.node = node)}
//         className={horizClassName}
//         id={this.props.id}
//         {...{
//           'data-slide': SlideStyles.Horiz,
//           'data-name': this.props.name
//         }}
//         style={horizSliderStyle}
//       >
//         {this.props.slides.map((s, i) => {
//           const hSlideProps = s.props || {};
//           return (
//             <Slide
//               shouldRender={true}
//               key={i}
//               horizontalSliderName={this.props.name}
//               id={hSlideProps.id}
//               className={hSlideProps.className}
//               height={this.props.height}
//               width={this.props.width}
//               horizontal={true}
//               style={horizSlideStyle}
//               {...hSlideProps}
//             >
//               {hSlideProps.children}
//             </Slide>
//           );
//         })}
//       </div>
//     );
//   }
// }
