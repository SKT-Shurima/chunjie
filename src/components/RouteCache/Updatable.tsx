import { Component } from 'react';
import { run } from './utils/utils';

interface IProps {
  when: boolean;
}

class Updatable extends Component<IProps> {
  public shouldComponentUpdate(nextProps: any) {
    return nextProps.when;
  }

  public render = () => run(this.props, 'children');
}

export default Updatable;
