import '@babel/polyfill';
import 'url-polyfill';
import React, { Component, Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import intl from 'react-intl-universal';
import { configure } from 'mobx';
import FastClick from 'fastclick';
import qs from 'qs';
import moment from 'moment';
import 'moment/locale/zh-cn';

const Root = lazy(() => import('./router/Root'));

/* must use action() to mutate observables */
configure({
  enforceActions: 'always'
});

FastClick.attach(document.body);

window.APP_CREATOR_NAMESPACE = '';
window.APP_CREATOR_APP_ID = '';
window.APP_CREATOR_SHOW_NAME = '';
window.APP_LANG = 'zh_CN' || 'zh_CN';

if (window.location.hash.includes('appId=')) {
  const qsForm = qs.parse(window.location.hash.split('?')[1]);
  window.APP_CREATOR_NAMESPACE = qsForm.namespace;
  window.APP_CREATOR_APP_ID = qsForm.appId;
  const appTitle = window.parent.localStorage.getItem('appTitle');
  window.APP_CREATOR_SHOW_NAME = appTitle
    ? appTitle.replace(/^supOS-*/g, '')
    : '';
}

//国际化资源
/*eslint-disable @typescript-eslint/camelcase*/
const locales = {
  en_US: require('./locales/en_US.json'),
  zh_CN: require('./locales/zh_CN.json')
};
const momentLocalesMap: any = {
  en_US: 'en',
  zh_CN: 'zh-cn'
};
/*eslint-disable*/

interface IProps {}
interface IState {
  initDone: boolean;
}

class App extends Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {
      initDone: false
    };
  }

  public componentDidMount(): void {
    const APP_LANG = window.APP_LANG;

    intl
      .init({
        currentLocale: APP_LANG,
        locales
      })
      .then(() => {
        moment.locale(momentLocalesMap[APP_LANG]);
        this.setState({ initDone: true });
      });
  }
  public render() {
    const { initDone } = this.state;
    return (
      initDone && (
        <Suspense fallback={''}>
          <Root />
        </Suspense>
      )
    );
  }
}

ReactDOM.render(<App />, document.getElementById('supngin-root'));
