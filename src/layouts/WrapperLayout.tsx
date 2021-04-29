import React from 'react';
import { inject, observer } from 'mobx-react';
import { message } from 'antd';
import {
  withRouter,
  RouteComponentProps,
  matchPath,
  Route
} from 'react-router-dom';
import {
  CacheRoute,
  CacheSwitch,
  dropByCacheKey
} from '@components/RouteCache';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import PageLoading from '@components/PageLoading';
import Home from '@pages/HomePage';
import SuposLayout from './SuposLayout';
import { basicRouter, IRouteItem } from '../router/route.config';

function canActivePath(routes: IRouteItem[], result: any[] = []): any[] {
  routes.forEach(route => {
    const children: IRouteItem[] | undefined = route.childRoutes;
    if (route.component && route.name) {
      result.push({
        path: route.path,
        name: route.name
      });
    }
    if (children && children.length > 0) {
      canActivePath(children, result);
    }
  });
  return result;
}

interface ITabItem {
  path: string;
  name: string;
  search: string;
}
interface IProps {
  global?: any;
  routerData: any[];
}

@inject('global')
@observer
class WrapperLayout extends React.Component<IProps & RouteComponentProps> {
  private unlisten: any;
  private unblock: any;

  private flatRoutes = (routes: any[], result: any[] = []) => {
    routes.forEach((route: any) => {
      if (route.component) result.push(route);
      const child: any[] = route.childRoutes;
      if (child && child.length > 0) this.flatRoutes(child, result);
    });
    return result;
  };

  //替换指定tabItem
  public repTabItem = (tabItem: ITabItem, search: string) => {
    const { tabList, replaceTabItem } = this.props.global;
    const idx = _.findIndex(tabList, ['path', tabItem.path]);
    let tabName = tabItem.name;
    const searchParams = new URLSearchParams(search.substring(1));

    if (searchParams.get('tab')) {
      tabName = searchParams.get('tab') as string;
    }

    const newTabItem = { ...tabItem, name: tabName, search };

    replaceTabItem(newTabItem, idx);
  };

  public pushCurrentRoute = (routeMap: any, location: any) => {
    const { tabList, addTabItem, replaceTabItem } = this.props.global;
    const selectedTab: ITabItem | undefined = _.find(routeMap, route =>
      matchPath(location.pathname, { path: route.path, exact: true })
    );
    const hasInTab = _.find(tabList, ['path', location.pathname]);

    if (!selectedTab || hasInTab) return; //非route页或已有该tab, return

    //新增tabItem
    const tabCount = tabList.length;
    let tabName = selectedTab.name;

    if (location.search) {
      //取URL-params内的tab参数作为当前页的tabName
      const searchParams = new URLSearchParams(location.search.substring(1));
      if (searchParams.get('tab')) {
        tabName = searchParams.get('tab') as string;
      }
    }

    const newTab: ITabItem = {
      path: location.pathname,
      name: tabName,
      search: decodeURIComponent(location.search)
    };

    if (tabCount < 10) {
      addTabItem(newTab);
    } else {
      message.warning('顶部标签最多缓存10页,请关闭一些标签');

      const lastTab = tabList[tabList.length - 1];

      replaceTabItem(newTab, tabList.length - 1);
      dropByCacheKey(lastTab.path);
    }
  };

  public componentDidMount(): void {
    const routeMap = canActivePath(basicRouter);
    const {
      history,
      location: { search, hash }
    } = this.props;

    this.pushCurrentRoute(routeMap, {
      ...this.props.location,
      ...(hash && { search: search + hash })
    });

    //跳转后的监听
    this.unlisten = history.listen(location => {
      const { hash, search } = location;
      this.pushCurrentRoute(routeMap, {
        ...location,
        ...(hash && { search: search + hash })
      });
    });

    //跳转前的监听
    this.unblock = history.block(location => {
      const { tabList } = this.props.global;
      const { search, hash } = location;
      const hasInTab = _.find(tabList, ['path', location.pathname]);
      const currentSearch = hash ? search + hash : search;

      if (hasInTab) {
        const searchText = decodeURIComponent(currentSearch);

        if (hasInTab.search !== searchText) {
          dropByCacheKey(location.pathname);
          this.repTabItem(hasInTab, searchText); //替换当前tabItem
        }
      }
    });
  }

  public componentWillUnmount(): void {
    this.unlisten();
    this.unblock();
  }

  public render() {
    const { routerData } = this.props;
    const [{ childRoutes: processRoutes }] = routerData;

    return (
      <ErrorBoundary>
        <CacheSwitch>
          <Route exact path="/" component={Home} />
          <Route exact path="/reloading" component={PageLoading} />
          <CacheRoute
            path="/process"
            render={props => (
              <SuposLayout
                type="process"
                {...props}
                routerData={processRoutes}
              />
            )}
          />
        </CacheSwitch>
      </ErrorBoundary>
    );
  }
}

export default withRouter(WrapperLayout);
