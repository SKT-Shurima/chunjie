export const isUndefined = (val: any): boolean => typeof val === 'undefined';

export const isNull = (val: any): boolean => val === null;

export const isFunction = (val: any): boolean => typeof val === 'function';

export const isString = (val: any): boolean => typeof val === 'string';

export const isExist = (val: any): boolean =>
  !(isUndefined(val) || isNull(val));

export const isArray = (val: any): boolean => val instanceof Array;

export const isNaN = (val: any): boolean => val !== val;

export const isNumber = (val: any): boolean =>
  typeof val === 'number' && !isNaN(val);

export const get = (obj: any, keys: any = [], defaultValue?: any) => {
  try {
    if (isNumber(keys)) {
      keys = String(keys);
    }
    const result = (isString(keys) ? keys.split('.') : keys).reduce(
      (res: any, key: any) => res[key],
      obj
    );
    return isUndefined(result) ? defaultValue : result;
  } catch (e) {
    return defaultValue;
  }
};

export const run = (obj: any, keys: any = [], ...args: undefined[]) => {
  keys = isString(keys) ? keys.split('.') : keys;

  const func = get(obj, keys);
  const context = get(obj, keys.slice(0, -1));

  return isFunction(func) ? func.call(context, ...args) : func;
};
