import React from 'react';
import { CopyrightCircleOutlined } from '@ant-design/icons';

export default function FooterComp() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-main">
      <div>
        SUTTARWALA CONSTRUCTION
        <CopyrightCircleOutlined className="copy-right-icon" />
        {currentYear}
      </div>
    </div>
  );
}
