import React from 'react';
import { Modal } from 'antd';
import Icon from '@components/Icon';

import styles from './ModalSuccess.less';

function ModalSuccess(config: any) {
  Modal.success({
    className: styles.modalSuccess,
    title: config.title,
    content: config.content,
    maskStyle: {
      background: 'rgba(19,24,32,.8)'
    },
    centered: true,
    icon: (
      <Icon
        type="circle-success"
        width="26px"
        height="26px"
        fill="rgba(255,255,255,0.7)"
      />
    )
  });
}

export default ModalSuccess;
