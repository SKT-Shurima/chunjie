import React, { Fragment, Component } from 'react';
import { Modal, Button } from 'antd';
import { ModalProps } from 'antd/lib/modal/Modal';

import styles from './Modal.less';

interface IModalProps extends ModalProps {
  otherFooter?: any;
  loading?: boolean;
}

const {
  fullscreenElement,
  webkitFullscreenElement,
  mozFullScreenElement
}: any = document;
const containerElement =
  fullscreenElement || webkitFullscreenElement || mozFullScreenElement;

class DialogModal extends Component<IModalProps> {
  public static defaultProps = {
    width: 560,
    okText: '确认',
    cancelText: '取消'
  };

  public defaultFooter = () => (
    <Fragment>
      <dt className={styles.defaultFooter}>
        <Button
          type="primary"
          className={styles.dialogOk}
          onClick={this.props.onOk}
          loading={this.props.loading}
        >
          {this.props.okText}
        </Button>
        <Button onClick={this.props.onCancel} className={styles.dialogClose}>
          {this.props.cancelText}
        </Button>
      </dt>
      {this.props.otherFooter ? (
        <dd className={styles.otherFooter}>{this.props.otherFooter}</dd>
      ) : null}
    </Fragment>
  );

  public render() {
    const { children, ...restProps } = this.props;

    const getContainer = this.props.getContainer
      ? this.props.getContainer
      : () => containerElement || document.body;

    return (
      <Modal
        className={styles.globalModalContainer}
        {...restProps}
        getContainer={getContainer}
        maskClosable={false}
        footer={
          this.props.footer !== undefined ? (
            this.props.footer
          ) : (
            <dl key="otherFooter" className={styles.footer}>
              {this.defaultFooter()}
            </dl>
          )
        }
      >
        {children}
      </Modal>
    );
  }
}

export default DialogModal;
