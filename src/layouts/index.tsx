import React, { Component } from 'react';
import { Layout } from 'antd';
import SuposHeader from './Header/SuposHeader';
import WrapperLayout from './WrapperLayout';

interface IProps {
  routerData: any[];
}

class SuposWrapper extends Component<IProps, {}> {
  public render() {
    const { routerData } = this.props;

    return (
      <Layout>
        <SuposHeader />
        <WrapperLayout routerData={routerData} />
      </Layout>
    );
  }
}

export default SuposWrapper;
