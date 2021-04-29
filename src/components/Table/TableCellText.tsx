/*
 * @Description: 表格单元格超出隐藏render处理
 * @Author: liyongshuai
 */
import React, { FunctionComponent } from 'react';
import { Tooltip } from 'antd';

interface IProps {
  text: any;
  className?: string;
  style?: React.CSSProperties;
}

const TableCellText: FunctionComponent<IProps> = (props: IProps) => {
  const { text, ...restProps } = props;
  return (
    <Tooltip placement="topLeft" title={text}>
      <span {...restProps}>{text}</span>
    </Tooltip>
  );
};

export default TableCellText;
