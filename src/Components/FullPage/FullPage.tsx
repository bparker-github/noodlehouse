import * as React from 'react';
import { ISlideProps, Slide } from './Slide';

export interface IFullPageProps {
  slideConfigs: ISlideProps[];
}

export interface IFullPageState {
  ref?: HTMLDivElement | null;
  curVertPage: number;
  // curHoriPage: number;
}

export class FullPage extends React.Component<IFullPageProps, IFullPageState> {
  isWheeling: boolean = false;

  constructor(props: IFullPageProps) {
    super(props);
    this.state = {
      curVertPage: 0
    };
  }

  componentDidMount() {
    this.resize();
    this.addWheelEvent();
    window.onresize = this.resize;
  }

  render() {
    return <div className={'fullpage'}>{this.props.slideConfigs.map((conf, i) => <Slide key={i} {...conf} />)}</div>;
  }

  private scrollTo = (vertPage: number) => {
    this.setState({ curVertPage: vertPage });
    const translateY = `translateY(-${window.innerHeight * (vertPage - 1)}px`;
    this.props.slideConfigs.forEach((sc, i) => {
      document.getElementsByTagName('section')[i].style.transform = translateY;
    });

    this.isWheeling = true;
    setTimeout(() => {
      this.isWheeling = false;
    }, 600);
  };

  private scrollPage = (scrollDelta: number) => {
    if (this.isWheeling) {
      return;
    }
    if (scrollDelta < 0 && this.state.curVertPage < this.props.slideConfigs.length) {
      this.scrollTo(this.state.curVertPage + 1);
    } else if (this.state.curVertPage > 1) {
      this.scrollTo(this.state.curVertPage - 1);
    }
  };

  private wheelHandler = (event: WheelEvent) => {
    let delta = 0;
    if (event.wheelDelta) {
      delta = event.wheelDelta / 120;
    } else if (event.detail) {
      delta = -event.detail / 3;
    }
    if (delta) {
      this.scrollPage(delta);
    }
  };

  private addWheelEvent = () => {
    window.addEventListener('DOMMouseScroll', this.wheelHandler, false);
    window.onmousewheel = document.onmousewheel = this.wheelHandler;
  };

  // private removeWheelEvent = () => {
  //   window.removeEventListener('DOMMouseScroll', this.wheelHandler, false);
  //   window.onmousewheel = document.onmousewheel = null;
  // };

  private resize = () => {
    const transY = `translateY(-${window.innerHeight * (this.state.curVertPage - 1)}px`;
    this.props.slideConfigs.forEach((sc, i) => {
      document.getElementsByTagName('section')[i].style.transform = transY;
      document.getElementsByTagName('section')[i].style.height = `${window.innerHeight}px`;
    });
  };
}
