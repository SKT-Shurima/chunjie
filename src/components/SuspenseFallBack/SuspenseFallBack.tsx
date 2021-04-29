import React, { FunctionComponent } from 'react';
import { Spin } from 'antd';

import styles from './SuspenseFallBack.less';

const SuspenseFallBack: FunctionComponent = () => {
  return (
    <div className={styles.spinWrapper}>
      <Spin className={styles.spin} />
    </div>
  );
};

export default SuspenseFallBack;
