/*
 * @Description: 公共处理404 页面
 * @Author: liyongshuai
 */

import * as React from 'react';

interface IExceptionProps {
  type: string | number;
}

export default function Exception(props: IExceptionProps) {
  return <div>{props.type || 404}</div>;
}
