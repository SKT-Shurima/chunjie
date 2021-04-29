import React, { Component } from 'react';
import styles from './ImageLoader.less';
import ImgFail from '@assets/images/common/image-load-fail.svg';
import NoImg from '@assets/images/common/img-no-upload.svg';

interface IProps {
  src: any;
  alt?: string;
  style?: any;
  size?: number[];
}
interface IState {
  error: boolean;
  prevSrc: any;
}
class ImageLoader extends Component<IProps, IState> {
  public constructor(props: Readonly<IProps>) {
    super(props);
    this.state = {
      error: false,
      prevSrc: props.src
    };
  }

  public static getDerivedStateFromProps(
    props: Readonly<IProps>,
    state: IState
  ) {
    if (props.src !== state.prevSrc) {
      return {
        error: false,
        prevSrc: props.src
      };
    }
    return null;
  }

  public handleImageError = () => {
    this.setState({ error: true });
  };

  public shouldComponentUpdate(
    nextProps: Readonly<IProps>,
    nextState: Readonly<IState>
  ): boolean {
    return (
      nextProps.src !== this.props.src || nextState.error !== this.state.error
    );
  }

  public render() {
    const { error } = this.state;
    const { src, alt = '', size = [50, 50], style = {} } = this.props;
    const cssText = {
      width: size[0] + 'px',
      height: (size.length > 1 ? size[1] : size[0]) + 'px',
      ...style
    };

    return (
      <div className={styles.container} style={{ ...cssText }}>
        {src ? (
          error ? (
            <img src={ImgFail as any} alt="image fail" />
          ) : (
            <img onError={this.handleImageError} src={src} alt={alt} />
          )
        ) : (
          <img src={NoImg as any} alt="no image" />
        )}
      </div>
    );
  }
}

export default ImageLoader;
