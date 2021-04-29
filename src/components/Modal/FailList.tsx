import React from 'react';
import { Table } from 'antd';
import memoizeOne from 'memoize-one';

import { TableCellText } from '@components/Table';

import styles from './FailList.less';
export interface IProps {
  id: string;
  message: string;
}

const getFilterColumns = memoizeOne((sortList): object[] => {
  const columns = _.map(sortList, (item: any) => {
    const { title, dataIndex, width } = item;
    return {
      title,
      dataIndex,
      width,
      render: (text: string) => <TableCellText text={text} />
    };
  });

  return columns;
});

export default function FailList(list: IProps[], sortList: any) {
  const columns = getFilterColumns(sortList);

  return (
    <Table
      rowKey="material_code"
      className={styles.tableWrapper}
      columns={columns}
      dataSource={list}
      scroll={{ y: 'calc(100vh - 263px)' }}
      pagination={false}
    />
  );
}
