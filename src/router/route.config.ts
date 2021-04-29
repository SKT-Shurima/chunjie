export interface IRouteItem {
  path: string;
  name?: string; //顶部tab栏默认展示名称
  component?: () => void;
  childRoutes?: IRouteItem[];
}

export const basicRouter: IRouteItem[] = [
  {
    path: '/page',
    name: 'page',
    component: () => import('@pages/InitPage/Container'),
    childRoutes: []
  }
];
