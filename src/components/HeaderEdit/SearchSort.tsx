import React, { Component } from 'react';
import {
  Row,
  Col,
  Button,
  Form,
  Input,
  Popconfirm,
  message,
  List,
  Checkbox
} from 'antd';
import classnames from 'classnames';
import { popupContainer } from '@utils/propUtil';
import Icon from '@components/Icon';
import styles from './SearchSort.less';

const { Search } = Input;
interface ISearchSortProps {
  sortData: any[];
  onSortOk: (dataSource: any) => void;
  onVagueSearch: (value: any) => void;
  onSearchGlobal: (value: any) => void;
}

interface IState {
  formVisible: boolean;
  searchNode: boolean;
  searchValue: string;
  dataSource: any;
  iconStyle: any;
}
class SearchSort extends Component<ISearchSortProps, IState> {
  public constructor(props: ISearchSortProps) {
    super(props);
    this.state = {
      formVisible: false,
      searchNode: false,
      searchValue: '',
      dataSource: _.cloneDeep(props.sortData),
      iconStyle: {
        transform: 'rotateZ(0deg)'
      }
    };
  }

  public componentDidUpdate(prevProps: any) {
    if (this.props.sortData !== prevProps.sortData) {
      this.setState({
        dataSource: _.cloneDeep(this.props.sortData)
      });
    }
  }

  public searchOpen = () => {
    this.setState({
      searchNode: true
    });
  };

  public searchClose = () => {
    this.setState({
      searchNode: false
    });
  };

  public searchGlobal = (e: any) => {
    this.setState(
      {
        searchValue: e.target.value
      },
      () => {
        this.props.onSearchGlobal(this.state.searchValue);
      }
    );
  };

  /**
   * 排序确认
   */
  public handleSortOk = () => {
    const { dataSource } = this.state;
    const isChecked = _.every(dataSource, ['check', false]);
    if (isChecked) {
      message.error('请至少选择一个字段展示!');
      return;
    }
    this.props.onSortOk(dataSource);
    message.success('筛选字段确认成功');
  };

  /**
   *  恢复默认值
   */
  public handleDefault = () => {
    this.setState({
      dataSource: _.cloneDeep(this.props.sortData)
    });
  };

  /**
   * 改变排序字段
   */
  public sortCheck = (e: any, key: any) => {
    const { dataSource } = this.state;
    // dataSource[key].check = e.target.checked;
    _.map(dataSource, (item: any) => {
      if (item.key === key) {
        item.check = e.target.checked;
      }
    });

    this.setState({
      dataSource
    });
  };

  /**
   *  模糊查询
   */
  public vagueSearch = (value: any) => {
    this.setState(
      {
        dataSource: _.cloneDeep(this.props.sortData)
      },
      () => {
        const dataValue = _.filter(this.state.dataSource, item => {
          if (item.name.indexOf(value) !== -1) {
            return item;
          }
        });
        if (!value.length) {
          this.setState({
            dataSource: _.cloneDeep(this.props.sortData)
          });
        } else {
          this.setState({
            dataSource: dataValue
          });
        }
      }
    );
  };

  public visibleChange = () => {
    const { iconStyle } = this.state;
    if (iconStyle.transform === 'rotateZ(180deg)') {
      this.setState({
        iconStyle: {
          transform: 'rotateZ(0deg)'
        }
      });
    } else {
      this.setState({
        iconStyle: {
          transform: 'rotateZ(180deg)'
        }
      });
    }
  };

  public render() {
    const { dataSource } = this.state;

    const sortText = () => {
      return (
        <div className={styles.sortText}>
          <Search
            placeholder="搜索"
            style={{ width: '100%' }}
            onSearch={this.vagueSearch}
          />
          <a className={styles.defaultValue} onClick={this.handleDefault}>
            默认值
          </a>
          <List
            itemLayout="horizontal"
            dataSource={dataSource}
            renderItem={(item: any) => (
              <List.Item>
                <Row>
                  <Col span={2}>
                    <Checkbox
                      checked={item.check}
                      onChange={e => {
                        this.sortCheck(e, item.key);
                      }}
                    />
                  </Col>
                  <Col span={16} offset={1}>
                    {item.name}
                  </Col>
                </Row>
              </List.Item>
            )}
          />
        </div>
      );
    };
    const sortList = () => {
      return (
        <Popconfirm
          placement="topLeft"
          icon={null}
          title={sortText()}
          onConfirm={this.handleSortOk}
          okText="确认"
          cancelText="取消"
          onVisibleChange={this.visibleChange}
          getPopupContainer={popupContainer}
        >
          <Button style={{ marginLeft: '10px' }}>
            <Icon type="filter" />
            <Icon
              type="arrow-down"
              style={this.state.iconStyle}
              width="7px"
              height="7px"
            />
          </Button>
        </Popconfirm>
      );
    };

    return (
      <div className={classnames(styles.searchSortContainer)}>{sortList()}</div>
    );
  }
}

export default Form.create()(SearchSort);
