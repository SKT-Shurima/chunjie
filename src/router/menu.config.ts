/*
 * @Description: 数据中台菜单管理
 * @Author: liyongshuai
 */
interface ISubmenu {
  path: string;
  name: string;
}

export interface IMenuItem {
  path: string;
  name: string;
  shortName: string;
  icon?: string;
  children?: ISubmenu[];
}

export const basicMenu: IMenuItem[] = [
  {
    path: '/page',
    name: 'page',
    icon: 'data-service',
    shortName: 'test',
    children: []
  }
];
