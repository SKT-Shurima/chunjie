import React, { Component } from 'react';

//组合头部与表格增加checkbox的高阶组件
const HocSelectRowTable = (HeaderComponent: any, TableComponent: any) => {
  return class extends Component {
    public constructor(props: any) {
      super(props);
      this.state = {
        selectedRowKeys: [],
        selectedRows: []
      };
    }

    public onChange = (selectedRowKeys: any, selectedRows: any) => {
      this.setState({
        selectedRowKeys,
        selectedRows
      });
    };

    public render() {
      const { selectedRowKeys, selectedRows } = this.state;
      return (
        <React.Fragment>
          <HeaderComponent
            selectedRowKeys={selectedRowKeys}
            selectedRows={selectedRows}
            onChange={this.onChange}
          />
          <TableComponent
            selectedRowKeys={selectedRowKeys}
            selectedRows={selectedRows}
            onChange={this.onChange}
          />
        </React.Fragment>
      );
    }
  };
};

export default HocSelectRowTable;
