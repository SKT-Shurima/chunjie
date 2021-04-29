import React, { Component } from 'react';
import { Row, Col, Tooltip } from 'antd';

import Icon from '@components/Icon';

import styles from './MessageState.less';

interface IProps {
  icon?: any;
  text: string;
  type: string;
}

class MessageState extends Component<IProps> {
  public render() {
    const { text, type } = this.props;
    return (
      <Row>
        <Col span={24}>
          <div className={`${styles.messageContainer} ${styles[type]}`}>
            <Icon
              type={type === 'success' ? 'circle-success' : 'circle-error'}
              style={{ margin: '0 10px' }}
              width="16px"
              height="16px"
            />
            <div className={styles.messageText}>
              <Tooltip placement="topLeft" title={text}>
                {text}
              </Tooltip>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default MessageState;
