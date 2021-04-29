import React, { Component } from 'react';
import { Layout } from 'antd';
import { NavLink } from 'react-router-dom';
import { CacheRoute, CacheSwitch } from '@components/RouteCache';
import Icon from '@components/Icon';
import { basicMenu } from '../../router/menu.config';
import styles from './index.less';

const { Content, Sider } = Layout;
const menuMap: any = {
  integrated: {
    map: basicMenu,
    name: '数据源管理',
    home: '/integrated'
  }
};

interface IProps {
  type: string;
  routerData: any[];
}
interface IState {}

class SuposLayout extends Component<IProps, IState> {
  private flatRoutes = (routes: any[], result: any[] = []) => {
    routes.forEach((route: any) => {
      if (route.component) result.push(route);
      const child: any[] = route.childRoutes;
      if (child && child.length > 0) this.flatRoutes(child, result);
    });
    return result;
  };

  public renderMenu = () => {
    const { type } = this.props;
    const mode = menuMap[type];
    return (
      <Sider className={styles.sider} trigger={null} theme="light" width={180}>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>{mode['name']}</h3>
          <div className={styles.menus}>
            {mode['map'].map((menu: any) => (
              <NavLink
                to={menu.path}
                className={styles.item}
                activeClassName={styles.active}
                key={menu.path}
              >
                {menu.iconType ? (
                  <Icon
                    type={'menu-' + menu.iconType}
                    width="16px"
                    fill="#8594A8"
                    className={styles.icon}
                  />
                ) : (
                  <span className={styles.circle} />
                )}
                {menu.name}
              </NavLink>
            ))}
          </div>
        </div>
      </Sider>
    );
  };

  public render() {
    const { routerData, type } = this.props;
    const homePath = menuMap[type]['home'];

    return (
      <Layout style={{ height: 'calc(100vh - 28px)' }}>
        {this.renderMenu()}
        <Content>
          <CacheSwitch>
            {this.flatRoutes(routerData).map(({ path, component }) => (
              <CacheRoute
                exact
                className={styles.cacheWrapper}
                path={path}
                component={component}
                key={path}
              />
            ))}
          </CacheSwitch>
        </Content>
      </Layout>
    );
  }
}

export default SuposLayout;
