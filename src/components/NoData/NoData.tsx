import React from 'react';
import styles from './index.less';

interface IProps {
  width?: string;
  height?: string;
}

const NoData: React.FunctionComponent<IProps> = (props: IProps) => {
  const { width = '80px', height = '80px' } = props;
  return (
    <dl className={styles.wrapper}>
      <div>
        <dt className={styles.title} style={{ width, height }} />
        <dd className={styles.container}>暂无数据</dd>
      </div>
    </dl>
  );
};

export default NoData;
