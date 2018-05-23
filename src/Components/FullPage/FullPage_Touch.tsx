// import * as React from 'react';
// import { ISlideProps, Slide } from './Slide';

// export interface IFullPageProps {
//   slideConfigs: ISlideProps[];
// }

// export interface IFullPageState {
//   ref?: HTMLDivElement | null;
//   curVertPage: number;
//   // curHoriPage: number;
// }

// export class FullPage extends React.Component<IFullPageProps, IFullPageState> {
//   containerEl: HTMLDivElement | null = null;
//   isWheeling: boolean = false;
//   isAnimating: boolean = false;
//   isInSwipe: boolean = false;
//   isTransitionEnabled: boolean = true;

//   touchMoveDelta: number = 0;
//   reqAnim: number = 0;
//   touchStartPosY: number = 0;
//   totalPages: number = 0;

//   constructor(props: IFullPageProps) {
//     super(props);
//     this.state = {
//       curVertPage: 0
//     };
//     this.totalPages = props.slideConfigs.length;
//   }

//   componentDidMount() {
//     this.resize();
//     this.addWheelEvent();
//     this.enableTransition();
//     this.addTouchEvents();
//     window.onresize = this.resize;
//   }

//   render() {
//     return (
//       <div ref={c => (this.containerEl = c)} className={'fullpage'}>
//         {this.props.slideConfigs.map((conf, i) => <Slide key={i} {...conf} />)}
//       </div>
//     );
//   }

//   private setContainerStyles = (styles: React.CSSProperties) => {
//     if (this.containerEl) {
//       Object.assign(this.containerEl.style, styles);
//     }
//   };

//   private scrollTo = (vertPage: number) => {
//     this.setState({ curVertPage: vertPage });
//     const translateY = `translateY(-${window.innerHeight * (vertPage - 1)}px`;
//     this.props.slideConfigs.forEach((sc, i) => {
//       document.getElementsByTagName('section')[i].style.transform = translateY;
//     });

//     this.isWheeling = true;
//     setTimeout(() => {
//       this.isWheeling = false;
//     }, 600);
//   };

//   private scrollPage = (scrollDelta: number) => {
//     if (this.isWheeling) {
//       return;
//     }
//     if (scrollDelta < 0 && this.state.curVertPage < this.props.slideConfigs.length) {
//       this.scrollTo(this.state.curVertPage + 1);
//     } else if (this.state.curVertPage > 1) {
//       this.scrollTo(this.state.curVertPage - 1);
//     }
//   };

//   private wheelHandler = (event: WheelEvent) => {
//     let delta = 0;
//     if (event.wheelDelta) {
//       delta = event.wheelDelta / 120;
//     } else if (event.detail) {
//       delta = -event.detail / 3;
//     }
//     if (delta) {
//       this.scrollPage(delta);
//     }
//   };

//   private addWheelEvent = () => {
//     window.addEventListener('DOMMouseScroll', this.wheelHandler, false);
//     window.onmousewheel = document.onmousewheel = this.wheelHandler;
//   };

//   private updateTouchMove = () => {
//     const translateY = `translateY(${-(window.innerHeight * (this.state.curVertPage - 1) - this.touchMoveDelta)}px)`;
//     this.setContainerStyles({ transform: translateY });
//     this.reqAnim = requestAnimationFrame(this.updateTouchMove);
//   };

//   private enableTransition = (duration = 0.5) => {
//     this.setContainerStyles({ transition: `transform ${duration}s cubic-bezier(0.19, 1, 0.22, 1)` });
//     this.isTransitionEnabled = true;
//   };
//   private disableTransition = () => {
//     this.setContainerStyles({ transition: 'transform 0s' });
//     this.isTransitionEnabled = false;
//   };

//   private onTouchStart = (e: TouchEvent) => {
//     if (this.isAnimating || this.isInSwipe) {
//       return;
//     }
//     this.isInSwipe = true;
//     this.reqAnim = requestAnimationFrame(this.updateTouchMove);
//     this.touchStartPosY = e.touches[0].clientY;
//     this.disableTransition();
//   };

//   private onTouchMove = (e: TouchEvent) => {
//     if (this.isAnimating || this.isInSwipe) {
//       return;
//     }
//     const touchPosY = e.changedTouches[0].clientY;
//     this.touchMoveDelta = touchPosY - this.touchStartPosY;
//   };

//   private onTouchEnd = (e: TouchEvent) => {
//     cancelAnimationFrame(this.reqAnim);
//     this.touchMoveDelta = 0;
//     if (this.isAnimating || !this.isInSwipe) {
//       return;
//     }

//     this.isInSwipe = false;
//     const touchEndY = e.changedTouches[0].clientY;
//     const delta = touchEndY - this.touchStartPosY;
//     this.handleSwipeEnd(delta);
//   };

//   private resetTranslateY(animate?: boolean) {
//     const translateY = `translateY(${-(window.innerHeight * (this.state.curVertPage - 1))}px)`;
//     if (animate) {
//       this.isAnimating = true;
//     }
//     this.setContainerStyles({ transform: translateY });
//   }

//   private handleSwipeEnd = (delta: number) => {
//     if (Math.abs(delta) > 100) {
//       const duration = (1.0 - Math.abs(delta) / window.innerHeight) * 0.5;

//       this.enableTransition(duration);
//       if (delta < 0) {
//         if (this.state.curVertPage < this.totalPages) {
//           this.scrollTo(this.state.curVertPage + 1);
//         } else {
//           this.resetTranslateY();
//         }
//       } else {
//         if (this.state.curVertPage > 1) {
//           this.scrollTo(this.state.curVertPage - 1);
//         } else {
//           this.resetTranslateY();
//         }
//       }
//     } else if (Math.abs(delta) > 10) {
//       this.enableTransition(0.5 * 0.5);
//       this.resetTranslateY(true);
//     } else {
//       this.resetTranslateY(false);
//     }
//   };

//   private addTouchEvents = () => {
//     document.addEventListener('touchstart', this.onTouchStart, false);
//     document.addEventListener('touchmove', this.onTouchMove, false);
//     document.addEventListener('touchend', this.onTouchEnd, false);
//   };

//   private resize = () => {
//     const transY = `translateY(-${window.innerHeight * (this.state.curVertPage - 1)}px`;
//     this.props.slideConfigs.forEach((sc, i) => {
//       document.getElementsByTagName('section')[i].style.transform = transY;
//       document.getElementsByTagName('section')[i].style.height = `${window.innerHeight}px`;
//     });
//   };
// }
