import React, { Component } from 'react';
import { Modal, Progress, Button } from 'antd';

import styles from './ModalProgress.less';

interface IProps {
  percent: number;
  visible: boolean;
  onCancel: () => void;
}
class ModalProgress extends Component<IProps> {
  public render() {
    return (
      <Modal
        className={styles.modalContainer}
        centered={true}
        closable={false}
        visible={this.props.visible}
        // visible={true}
        footer={[
          <Button key="back" onClick={this.props.onCancel}>
            取消
          </Button>
        ]}
      >
        {/* <div className={styles.title}>正在导出，剩余4秒</div> */}
        <Progress percent={this.props.percent} strokeWidth={16} />
      </Modal>
    );
  }
}
export default ModalProgress;
