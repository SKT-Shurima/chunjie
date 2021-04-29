import React, { Component, Fragment } from 'react';
import { Input, Checkbox, Divider, Button, Row } from 'antd';

import styles from './Filters.less';

interface IFilterProps {
  enumData: any; //枚举列表
  isEnum: boolean; //判断是否需要枚举
  confirm: any;
  clearFilters: any;
  checkList: any;
  setSelectedKeys: (value: any) => void;
  handleFieldSearch: (confirm: any) => void;
  handleSearchReset: (clearFilter: any) => void;
}

interface IFilterStates {
  checkedList: any;
  dataSource: any;
}

export default class Filters extends Component<IFilterProps, IFilterStates> {
  public constructor(props: IFilterProps) {
    super(props);
    this.state = {
      checkedList: _.cloneDeep(props.checkList),
      dataSource: _.cloneDeep(props.enumData)
    };
  }

  public static getDerivedStateFromProps(nextProps: any, state: any) {
    const { enumData } = nextProps;
    const { dataSource } = state;
    const isDataSource = _.isEqual(enumData, dataSource);

    if (!isDataSource) {
      return {
        dataSource: enumData
      };
    }

    return null;
  }

  public handleSearchEnter = (confirm: any) => {
    const { isEnum } = this.props;
    !isEnum && this.props.handleFieldSearch(confirm);
  };

  /**
   * 搜索框模糊查询
   */
  public handleChangeSearch = (value: any) => {
    const { isEnum } = this.props;
    isEnum
      ? this.setState(
          {
            dataSource: _.cloneDeep(this.props.enumData)
          },
          () => {
            const dataValue = _.filter(this.state.dataSource, item => {
              if (item.name.indexOf(value) !== -1) {
                return item;
              }
            });
            if (!value.length) {
              this.setState({
                dataSource: _.cloneDeep(this.props.enumData)
              });
            } else {
              this.setState({
                dataSource: dataValue
              });
            }
          }
        )
      : this.props.setSelectedKeys(value ? [value] : []);
  };

  public handleClickAll = () => {
    const { dataSource } = this.state;
    const list: any = [];
    const isDisable = _.filter(dataSource, item => {
      return item.disabled === false;
    });
    _.map(isDisable, (item: any) => {
      list.push(item.value);
    });
    this.setState({
      checkedList: list
    });
  };

  public handleCancleFilter = () => {
    this.setState({ checkedList: [] });
  };

  public filterCheck = (checkedList: any) => {
    this.setState({
      checkedList
    });
  };

  public handleReset = (confirm: any) => {
    this.props.handleFieldSearch(confirm);
  };

  public handleSearch = (confirm: any) => {
    const { checkedList } = this.state;
    this.props.setSelectedKeys(checkedList);
    this.props.handleFieldSearch(confirm);
  };

  public render() {
    const { isEnum, confirm } = this.props;
    const { dataSource, checkedList } = this.state;
    return (
      <div className={styles.filterModalContainer}>
        <Input
          placeholder={'请输入搜索内容'}
          onChange={e => this.handleChangeSearch(e.target.value)}
          onPressEnter={() => this.handleSearchEnter(this.props.confirm)}
          className={styles.filterInput}
        />
        {isEnum && (
          <Fragment>
            <Row className={styles.filterEdits}>
              <span className={styles.text} onClick={this.handleClickAll}>
                全选
              </span>
              <span className={styles.text} onClick={this.handleCancleFilter}>
                取消选择
              </span>
            </Row>
            <Row>
              <Checkbox.Group
                className={styles.checkWrapper}
                onChange={this.filterCheck}
                value={checkedList}
              >
                {_.map(dataSource, item => (
                  <Checkbox
                    className={styles.listItem}
                    key={item.key}
                    value={item.value}
                    disabled={item.disabled}
                  >
                    {item.name}
                  </Checkbox>
                ))}
              </Checkbox.Group>
            </Row>
            <Divider className={styles.filterDivider} />
            <div className={styles.filterBtnBox}>
              <Button
                onClick={() => this.handleReset(confirm)}
                size="small"
                type="link"
                style={{ marginRight: 8 }}
                className={styles.filterBtn}
              >
                取消
              </Button>
              <Button
                type="link"
                onClick={() => this.handleSearch(confirm)}
                size="small"
                className={styles.filterBtn}
              >
                确定
              </Button>
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}
