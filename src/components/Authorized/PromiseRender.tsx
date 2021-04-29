import React, { PureComponent } from 'react';
import { Spin } from 'antd';

interface IPromiseProps {
  ok?: any;
  error?: any;
  promise?: any;
}
interface IPromiseState {
  component?: any;
}
class PromiseRender extends PureComponent<IPromiseProps, IPromiseState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      component: false
    };
  }
  public async componentDidMount() {
    this.props.promise
      .then(() => {
        this.setState({
          component: this.props.ok
        });
      })
      .catch(() => {
        this.setState({
          component: this.props.error
        });
      });
  }
  public render() {
    const C = this.state.component;
    return C ? (
      <C {...this.props} />
    ) : (
      <div
        style={{
          width: '100%',
          height: '100%',
          margin: 'auto',
          paddingTop: 50,
          textAlign: 'center'
        }}
      >
        <Spin size="large" />
      </div>
    );
  }
}

export default PromiseRender;
