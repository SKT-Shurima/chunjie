import qs from 'qs';

//get请求序列化数组方法
export function qsStringify(data: any) {
  return qs.stringify(data, { indices: false });
}

/**
 * 从url获取参数
 *
 * @export
 * @param {string} name
 * @returns {string}
 */
export function queryURL(name: string, search: string): string | null {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  const result = search.substr(1).match(reg);

  if (result !== null) {
    return decodeURI(result[2]);
  }
  return null;
}

/**
 * @description: inputNumber 限制只能输入非负整数 需要搭配 formatter parser 使用
 * @param {number} value inputNumber 返回值
 * @return {number} 格式化后的值
 */
export function limitInt(value: any) {
  if (value - 0) {
    return `${value}`.replace(/\D/g, '');
  } else {
    return '0';
  }
}
