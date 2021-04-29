/*
 * @Description: supDAM Icon 组件化式开发引用
 * @Author: liyongshuai
 */
import React, { Component } from 'react';
import { Icon } from 'antd';
import classnames from 'classnames';

import Icons from './icons';
import styles from './index.less';
interface IProps {
  type: string;
  size?: string;
  width?: string | number;
  height?: string | number;
  primary?: boolean;
  disabled?: boolean;
  fill?: string;
  className?: string;
  style?: React.CSSProperties;
  onKeyUp?: React.KeyboardEventHandler<HTMLElement>;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const mappingSize: { [propName: string]: number } = {
  small: 16,
  default: 20,
  large: 24
};

class SupDAMIcon extends Component<IProps> {
  public static defaultProps = {
    primary: false,
    disabled: false
  };

  public render() {
    const {
      type,
      primary,
      disabled,
      size,
      fill,
      className,
      onClick,
      onKeyUp,
      ...restProps
    } = this.props;
    if (Icons[type]) {
      const { defaultSize, defaultFill, IconComp } = Icons[type];
      const value = `${mappingSize[size || defaultSize]}px`;
      const attr = {
        width: value,
        height: value
      };
      return (
        <Icon
          onClick={e => {
            if (disabled) return;
            onClick && onClick(e);
          }}
          onKeyUp={e => {
            if (disabled) return;
            onKeyUp && onKeyUp(e);
          }}
          component={() => (
            <IconComp
              {...attr}
              {...restProps}
              className={classnames(
                styles.icon,
                disabled && styles.disabled,
                className
              )}
              fillOpacity={disabled ? '0.4' : ''}
              fill={fill ? fill : primary ? '#0F71E2' : defaultFill}
            />
          )}
        />
      );
    } else {
      return <i />;
    }
  }
}

export default SupDAMIcon;
