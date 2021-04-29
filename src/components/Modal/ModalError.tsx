import React from 'react';
import { Modal } from 'antd';
import Icon from '@components/Icon';

import styles from './ModalError.less';

function ModalError(config: any) {
  Modal.error({
    className: styles.modalError,
    title: config.title,
    content: config.content,
    maskStyle: {
      background: 'rgba(19,24,32,.8)'
    },
    centered: true,
    icon: (
      <Icon
        type="circle-error"
        width="26px"
        height="26px"
        fill="rgba(255,255,255,0.7)"
      />
    )
  });
}

export default ModalError;
