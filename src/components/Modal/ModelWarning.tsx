import { Modal } from 'antd';
import classnames from 'classnames';
import styles from './ModalWarning.less';

function ModalWarning(config: any) {
  Modal.warning({
    className: classnames(styles.modalWarning, config.className),
    title: config.title,
    content: config.content,
    maskStyle: {
      background: 'rgba(19,24,32,.8)'
    },
    style: config.style,
    width: config.width,
    centered: true
  });
}

export default ModalWarning;
