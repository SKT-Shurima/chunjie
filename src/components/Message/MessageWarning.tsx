import React from 'react';
import { message } from 'antd';
import Icon from '@components/Icon';

function MessageWarning(content: any) {
  return message.warning({
    content,
    icon: (
      <Icon
        type="circle-info"
        width="16px"
        height="16px"
        fill="rgba(255,255,255,.7)"
      />
    )
  });
}

export default MessageWarning;
