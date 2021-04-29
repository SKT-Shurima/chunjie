import React, { PureComponent } from 'react';
import { Icon } from 'antd';

import styles from './ErrorBoundary.less';

interface IErrorProps {
  children?: any;
}

class ErrorBoundary extends PureComponent<IErrorProps> {
  public state = {
    hasError: false
  };

  public UNSAFE_componentWillReceiveProps() {
    this.setState({ hasError: false });
  }

  public componentDidCatch(error: any, info: any) {
    this.setState({
      hasError: true
    });
    console.error(error, info);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className={styles.fail}>
          <Icon type="frown" theme="outlined" className={styles.failIcon} />
          <p className={styles.failText}>Content load failed</p>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
