/*
 * @Description: axios 封装http 请求
 * @Author: liyongshuai
 */
import axios, {
  AxiosRequestConfig as _AxiosRequestConfig,
  Method
} from 'axios';
import { message } from 'antd';

import { BASE_URL } from '@consts/common';
import { getReqBaseHeader } from './apiUtils';
interface AxiosRequestConfig extends _AxiosRequestConfig {
  startTime?: Date;
  url: string;
}

interface HttpRequest {
  [key: string]: (
    url: string,
    data?: object,
    baseUrl?: string,
    requestConfig?: object
  ) => Promise<any>;
}

// enum HTTPERROR {
//   LOGICERROR,
//   TIMEOUTERROR,
//   NETWORKERROR
// }

const TOKEN_ERROR = [401, 402, 403];

const DEFAULT_CONFIG = {
  baseURL: process.env.BASEURL
};

const http: HttpRequest = {};
const methods: Method[] = ['get', 'post', 'put', 'delete'];

let authTimer: NodeJS.Timer;

// const isSuccess = (res: any) => res.code === '200';
// const resFormat = (res: any) => res.response || res.data || {};

methods.forEach((v: any) => {
  http[v] = (
    url: string,
    data?: object,
    baseUrl?: string,
    requestConfig?: object
  ) => {
    const reqConfig = _.isNil(requestConfig) ? {} : requestConfig;

    const axiosConfig: AxiosRequestConfig = {
      method: v,
      url,
      baseURL: `${BASE_URL}//`,
      // baseURL: '',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        ...getReqBaseHeader()
      },
      data,
      ...reqConfig
    };
    const instance = axios.create(DEFAULT_CONFIG);
    // Add a request interceptor
    instance.interceptors.request.use(
      cfg => {
        return cfg;
      },
      error => Promise.reject(error)
    );
    // Add a response interceptor
    instance.interceptors.response.use(
      response => {
        if (!response || response.status >= 400) return;
        const rdata =
          typeof response.data === 'object' && !isNaN(response.data.length)
            ? response.data[0]
            : response.data;
        // if (!isSuccess(rdata)) {
        //   return Promise.reject({
        //     msg: rdata.msg,
        //     code: rdata.code,
        //     type: HTTPERROR[HTTPERROR.LOGICERROR],
        //     config: response.config
        //   });
        // }
        return rdata;
      },
      error => {
        if (TOKEN_ERROR.includes(error.response.status)) {
          message.destroy();
          message.error('Authentication failure, Please relogin!');
          clearTimeout(authTimer);
          authTimer = setTimeout(() => {
            window.parent.location.replace(window.parent.location.origin);
          }, 300);
          return;
        } else {
          const { code, message } = error.response.data;
          return {
            code,
            message
          };
        }
      }
    );
    if (v === 'get') {
      axiosConfig.params = data;
    } else if (data instanceof FormData) {
    } else {
      axiosConfig.data = data;
      // axiosConfig.data = qs.stringify(data);
    }
    axiosConfig.startTime = new Date();
    return instance
      .request(axiosConfig)
      .then(res => res)
      .catch(err => {
        message.destroy();
        message.error(err.response || err.msg || err.stack || 'unknown error');
        return Promise.reject(
          axiosConfig.url.includes('autoScript.set')
            ? { err }
            : { err, stack: err.msg || err.stack || '' }
        );
      });
  };
});

/**
 * 生成用于取消请求的cancel与token
 * @see https://github.com/axios/axios#cancellation
 */
export const makeCancelTokenSource = () => axios.CancelToken.source();

export default http;
