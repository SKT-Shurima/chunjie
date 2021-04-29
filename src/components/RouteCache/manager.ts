import { get, run } from './utils/utils';

interface IComponentBox {
  [propName: string]: any;
}

const __components: IComponentBox = {};

export const register = (key: string, component: any) => {
  __components[key] = component;
};

const dropComponent = (component: any) => run(component, 'reset');

export const dropByCacheKey = (key: string) => {
  const cache = get(__components, [key]);
  if (!cache) {
    return;
  }
  dropComponent(cache);
};
