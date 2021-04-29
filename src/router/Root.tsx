/*
 * @Description: 数据中台项目根节点挂载入口
 * @Author: liyongshuai
 */
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { ConfigProvider, message } from 'antd';
import { Provider } from 'mobx-react';
import { getRouterData } from './router';
import GlobalStore from '../stores/global';
// import { APP_LANG } from '@consts/common';
import SuposWrapper from '../layouts';

//antd组件国际化语言
// import enUS from 'antd/es/locale/en_US';
// import zhCN from 'antd/es/locale/zh_CN';

//全局通用样式
import '@assets/css/common.global.less';
import '@assets/css/table.global.less';

//国际化资源
/*eslint-disable @typescript-eslint/camelcase*/
// const antdLocalesMap: any = {
//   en_US: enUS,
//   zh_CN: zhCN
// };
/*eslint-disable*/

const store = new GlobalStore();
const routerData = getRouterData();
// const antdLocale = antdLocalesMap[APP_LANG];

message.config({
  duration: 2,
  maxCount: 3
});

const Root = () => {
  return (
    <Provider global={store}>
      <HashRouter>
        <ConfigProvider autoInsertSpaceInButton={false}>
          <SuposWrapper routerData={routerData} />
        </ConfigProvider>
      </HashRouter>
    </Provider>
  );
};

export default Root;
