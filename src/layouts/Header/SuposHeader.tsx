import React, { Component } from 'react';
import { Menu, Dropdown, message } from 'antd';
import { inject, observer } from 'mobx-react';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';
import { dropByCacheKey } from '@components/RouteCache';
import TipsDelete from '@components/Modal/TipsDelete';
import Icon from '@components/Icon';
import styles from './SuposHeader.less';

interface ITabItem {
  path: string;
  name: string;
  iconType?: string;
  search: string;
}
interface IProps extends RouteComponentProps {
  global?: any;
}

@inject('global')
@observer
class SuposHeader extends Component<IProps> {
  private clickTabIndex = 0;

  public deleteTab = (path: string) => {
    const {
      global: { tabList, promptMap, changePromptMap, removeTabItem },
      location: { pathname }
    } = this.props;
    const target = _.find(tabList, ['path', path]) as ITabItem;
    const idx = _.findIndex(tabList, ['path', path]);
    const tabs = _.cloneDeep(tabList);
    const nextTab = tabs[idx + 1] || tabs[idx - 1] || { path: '/' };
    const nextPath = nextTab.path + (nextTab.search || '');

    if (promptMap[path]) {
      TipsDelete({
        title: '确定关闭对应标签?',
        content: '未保存的更改将会丢失!',
        onOk: () => {
          removeTabItem(target);

          if (pathname === path) {
            this.props.history.push(nextPath);
          }

          dropByCacheKey(path);
          changePromptMap(path, false);
        }
      });
    } else {
      removeTabItem(target);

      if (pathname === path) {
        this.props.history.push(nextPath);
      }

      dropByCacheKey(path);
    }
  };

  public handleMouseClick = (path: string, e: MouseEvent) => {
    const { tabList } = this.props.global;
    //鼠标中键删除
    if (e.button === 1 && tabList.length > 1) {
      this.deleteTab(path);
    }
  };

  public handleRightClick = (e: any) => {
    let node = e.target;

    while (
      node &&
      node.tagName.toLowerCase() !== 'div' &&
      _.isNil(node.dataset.i)
    ) {
      node = node.parentNode;
    }

    this.clickTabIndex = node.dataset.i;
  };

  public handleContextMenuClick = ({ key }: any) => {
    const {
      global: { tabList, promptMap, changePromptMap, closeTabPage },
      location: { pathname }
    } = this.props;
    const { path, search } = tabList[this.clickTabIndex];

    //重新加载, 提示未保存修改
    if (key === '1') {
      const refreshProcess = () => {
        if (pathname === path) {
          this.props.history.push('/reloading');

          setTimeout(() => {
            this.props.history.push(path + search);
          }, 10);
        }

        message.success('刷新成功！');
        dropByCacheKey(path);
      };

      if (promptMap[path]) {
        TipsDelete({
          title: '确定重新加载对应标签页?',
          content: '未保存的更改将会丢失!',
          onOk: () => {
            refreshProcess();
            changePromptMap(path, false);
          }
        });
        return;
      }

      refreshProcess();
    }

    //关闭
    if (key === '2') {
      if (tabList.length > 1) {
        this.deleteTab(path);
      }
    }

    //关闭其他标签页
    if (key === '3') {
      //忽略promptMap[path]为true的标签
      const closePaths = _.map(
        _.filter(
          tabList,
          (item, i: number) =>
            i !== +this.clickTabIndex && !promptMap[item.path]
        ),
        'path'
      );

      if (pathname !== path) {
        this.props.history.push(path + search);
      }

      closeTabPage(closePaths);

      if (tabList.length > 1) {
        message.warning('请手动关闭存在未保存更改的页面！');
      }
    }
  };

  public renderContextMenu = () => {
    const { tabList } = this.props.global;
    const disableCloseBtn = tabList.length < 2;

    return (
      <Menu onClick={this.handleContextMenuClick}>
        <Menu.Item key="1">重新加载</Menu.Item>
        <Menu.Item key="2" disabled={disableCloseBtn}>
          关闭
        </Menu.Item>
        <Menu.Item key="3" disabled={disableCloseBtn}>
          关闭其他标签页
        </Menu.Item>
      </Menu>
    );
  };

  public render() {
    const { tabList } = this.props.global;
    const showCloseBtn = tabList.length > 1;

    return (
      <div className={styles.header} onContextMenu={e => e.preventDefault()}>
        <Dropdown
          overlay={this.renderContextMenu}
          onContextMenu={this.handleRightClick}
          trigger={['contextMenu']}
        >
          <div className={styles.tabs}>
            {tabList.map((item: ITabItem, i: number) => (
              <div
                className={styles.item}
                key={item.path}
                onMouseDown={(e: any) => this.handleMouseClick(item.path, e)}
                data-i={i}
              >
                <NavLink
                  exact
                  className={styles.btn}
                  activeClassName={styles.selected}
                  to={item.path + item.search}
                >
                  {item.iconType && (
                    <Icon
                      type={'menu-' + item.iconType}
                      width="16px"
                      fill="#8594A8"
                      className={styles.prefixIcon}
                    />
                  )}
                  <span className={styles.title}>{item.name}</span>
                  <span style={{ marginLeft: '6px' }}>
                    {showCloseBtn ? (
                      <Icon
                        type="close"
                        className={styles.closeIcon}
                        onClick={e => {
                          e.preventDefault();
                          this.deleteTab(item.path);
                        }}
                      />
                    ) : (
                      <div style={{ width: '6px' }} />
                    )}
                  </span>
                </NavLink>
              </div>
            ))}
          </div>
        </Dropdown>
      </div>
    );
  }
}

export default withRouter(SuposHeader);
