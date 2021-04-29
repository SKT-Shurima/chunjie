import _ from 'lodash';
import Loadable from 'react-loadable';

import PageLoading from '@components/PageLoading';
import { basicRouter, IRouteItem } from './route.config';

const formatterRouteData = (routes: IRouteItem[]): object[] => {
  return _.map(routes, ({ path, component, childRoutes = [] }) => ({
    path,
    component: Loadable({ loader: component, loading: PageLoading }),
    childRoutes: childRoutes.length ? formatterRouteData(childRoutes) : []
  }));
};

export const getRouterData = () => {
  return formatterRouteData(basicRouter);
};
