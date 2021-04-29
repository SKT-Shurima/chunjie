import React from 'react';
import { Route } from 'react-router-dom';
import Exception from '../Exception';

interface IAuthTabProps {
  component: any;
  render: Function;
  authority: any;
}
class AuthorizedTab extends React.Component<IAuthTabProps> {
  private permissionCheck = () => {
    return true;
  };

  public render() {
    const { component: Component, render, ...rest } = this.props;
    if (this.permissionCheck()) {
      return (
        <Route
          {...rest}
          render={props =>
            Component ? <Component {...props} /> : render(props)
          }
        />
      );
    } else {
      return <Exception type="403" />;
    }
  }
}

export default AuthorizedTab;
