import React from 'react';
import { Modal } from 'antd';
import Icon from '@components/Icon';

import styles from './TipsDelete.less';

const { confirm } = Modal;

function TipsDelete(config: any) {
  confirm({
    className: styles.tipsDelete,
    title: config.title,
    content: config.content,
    okText: config.okText || '确认',
    okType: config.okType || 'success',
    cancelText: config.cancelText || '取消',
    onOk: config.onOk,
    onCancel: config.handleCancle,
    maskStyle: {
      background: 'rgba(19,24,32,.8)'
    },
    centered: true,
    icon: (
      <Icon
        type="circle-info"
        width="26px"
        height="26px"
        fill="rgba(255,255,255,0.7)"
      />
    )
  });
}

export default TipsDelete;
