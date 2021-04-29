import React from 'react';
import { Icon as AntIcon } from 'antd';

const customPaging = (page: number, type: string, originalElement: any) => {
  if (type === 'prev') {
    return <AntIcon type="caret-left" />;
  }
  if (type === 'next') {
    return (
      <span>
        下一页
        <AntIcon type="caret-right" />
      </span>
    );
  }
  if (page) {
    return originalElement;
  }
};

export { customPaging };
