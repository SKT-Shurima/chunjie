import moment from 'moment';
import { APP_NAME, APP_NAMESPACE } from '@consts/common';
export const getReqBaseHeader = () => {
  const ticket = localStorage.getItem('ticket');
  const language = localStorage.getItem('language');
  return {
    Authorization: `Bearer ${ticket}`,
    'Accept-Language': language || 'zh-cn',
    Sequence: `${moment().format('YYYYMMDDHHmmssms')}${_.random(100, 999)}`,
    'X-Namespace': APP_NAMESPACE,
    'X-App': APP_NAME
  };
};
