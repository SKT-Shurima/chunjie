import { observable, action, computed } from 'mobx';
import { basicMenu, IMenuItem } from '../router/menu.config';
import { dropByCacheKey } from '@components/RouteCache';

interface ITabItem {
  path: string;
  name: string;
  iconType?: string;
  search: string; //使用decodeURIComponent解码后的location.search
}
interface IPromptItem {
  [propName: string]: boolean;
}

/**
 * 根据basicMenu获取路由数组集合 ['/factory', '/factory/instance', ...]
 * @param menus
 * @param result
 */
const getFlatMenus = (menus: any[], result: string[] = []) => {
  menus.forEach(menuItem => {
    result.push(menuItem.path);
    const child = menuItem.children;
    if (child && child.length > 0) getFlatMenus(child, result);
  });
  return result;
};

class GlobalStore {
  @observable public basicMenu: IMenuItem[] = basicMenu;
  @observable public tabList: ITabItem[] = [];
  @observable public collapsedSider = false;
  @observable public promptMap: IPromptItem = {}; //关闭某些页面时是否需要做拦截

  @computed
  public get flatMenus(): string[] {
    return getFlatMenus(basicMenu);
  }

  @action.bound
  public addTabItem(item: ITabItem): void {
    this.tabList.push(item);
  }

  @action.bound
  public removeTabItem(item: ITabItem): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.tabList.remove(item);
  }

  //命令式关闭tab页, 并清除对应页面缓存
  @action.bound
  public closeTabPage(paths: string[] = []): void {
    paths.forEach(path => {
      const targetTab = _.find(this.tabList, ['path', path]);
      if (targetTab) {
        this.removeTabItem(targetTab);
        dropByCacheKey(targetTab.path);
      }
    });
  }

  @action.bound
  public replaceTabItem(item: ITabItem, idx: number): void {
    this.tabList[idx] = item;
  }

  @action.bound
  public changeCollapsed(value: boolean): void {
    this.collapsedSider = value;
  }

  @action.bound
  public changePromptMap(path: string, status: boolean): void {
    this.promptMap[path] = status;
  }
}

export default GlobalStore;
