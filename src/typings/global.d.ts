declare interface BooleanObject {
  [propName: string]: boolean;
}

declare interface StringObject {
  [propName: string]: string;
}

declare interface NumberObject {
  [propName: string]: number;
}

interface Window {
  ht: any;
  EditorGraphViewFlowInteractor: any;
  APP_CREATOR_APP_ID: string;
  APP_CREATOR_NAMESPACE: string;
  APP_CREATOR_SHOW_NAME: string;
  APP_LANG: string;
}

declare module '*.less' {
  const content: { [className: string]: string };
  export default content;
}

declare namespace _ {}
declare module 'jquery';
declare module 'fastclick';
declare module 'nanoid/generate';
