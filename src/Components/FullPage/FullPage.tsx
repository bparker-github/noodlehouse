import * as React from 'react';
import { Button } from '@blueprintjs/core';
import { ISlideProps, Slide } from './Slide';
import { Constants } from './FullPageConstants';
import { Footer } from './Footer';

export interface IFullPageProps {
  slideConfigs: ISlideProps[];
  useTransition?: boolean;
  scrollWrapping?: boolean;
}

export interface IFullPageState {
  ref?: HTMLDivElement | null;
  curVertPage: number;
  // curHoriPage: number;
}

export class FullPage extends React.Component<IFullPageProps, IFullPageState> {
  static defaultProps: Partial<IFullPageProps> = {
    scrollWrapping: true,
    useTransition: true
  };

  private fullPageEle: HTMLDivElement | null;
  private slideEles = new Map<string, Slide | null>();

  constructor(props: IFullPageProps) {
    super(props);
    this.state = {
      curVertPage: 0
    };
  }

  componentDidMount() {
    this.setTranslateAndHeight();
    window.onresize = this.setTranslateAndHeight;
    if (this.props.useTransition) {
      this.enableTransition();
    }
  }

  render() {
    return (
      <div ref={c => (this.fullPageEle = c)} className={Constants.Classes.FullPage}>
        <Footer
          content={
            <React.Fragment>
              <Button
                minimal={true}
                large={true}
                className={Constants.Classes.ScrollUpButton}
                onClick={this.scrollUp}
                text="UP"
              />
              <Button
                minimal={true}
                large={true}
                className={Constants.Classes.ScrollDownButton}
                onClick={this.scrollDown}
                text="DOWN"
              />
            </React.Fragment>
          }
        />
        {this.props.slideConfigs.map((conf, i) => (
          <Slide ref={c => this.slideEles.set(conf.id, c)} key={i} {...conf} />
        ))}
      </div>
    );
  }

  private scrollDown = () => {
    const nextPage = this.state.curVertPage < this.props.slideConfigs.length - 1 ? this.state.curVertPage + 1 : 0;
    this.scrollToVertPage(nextPage);
  };
  private scrollUp = () => {
    const nextPage = this.state.curVertPage === 0 ? this.props.slideConfigs.length - 1 : this.state.curVertPage - 1;
    this.scrollToVertPage(nextPage);
  };

  private setTranslateAndHeight = () => {
    const transY = `translateY(-${window.innerHeight * this.state.curVertPage}px`;
    const eles = document.getElementsByClassName(Constants.Classes.Slide);
    this.props.slideConfigs.forEach((sc, i) => {
      (eles[i] as HTMLDivElement).style.transform = transY;
      (eles[i] as HTMLDivElement).style.height = `${window.innerHeight}px`;
    });
  };

  private setFullPageStyle = (styles: React.CSSProperties) => {
    if (this.fullPageEle) {
      Object.assign(this.fullPageEle.style, styles);
    }
  };

  private scrollToVertPage = (vertPage: number) => {
    this.setState({ curVertPage: vertPage });
    const translateY = `translateY(-${window.innerHeight * vertPage}px`;
    const eles = document.getElementsByClassName(Constants.Classes.Slide);
    this.props.slideConfigs.forEach((sc, i) => {
      (eles[i] as HTMLDivElement).style.transform = translateY;
    });
  };

  private enableTransition = (duration = 0.5) => {
    this.setFullPageStyle({ transition: `transform ${duration}s cubic-bezier(0.19, 1, 0.22, 1)` });
  };

  // private disableTransition = () => {
  //   this.setFullPageStyle({ transition: 'transform 0s' });
  // };

  // private resetTranslateY(animate?: boolean) {
  //   const translateY = `translateY(${-(window.innerHeight * (this.state.curVertPage - 1))}px)`;
  //   if (animate) {
  //     this.isAnimating = true;
  //   }
  //   this.setContainerStyles({ transform: translateY });
  // }
}
