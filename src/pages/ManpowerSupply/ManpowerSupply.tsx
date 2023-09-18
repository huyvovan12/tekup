import { Row } from 'antd';
import React from 'react';
import { TableItem } from '../../components/index.js';
import { mockData } from './mock.data.js';

const ManpowerSupply = () => {
  return (
    <div
      style={{
        padding: '0 2rem',
      }}
    >
      <Row gutter={[20, 20]}>
        <TableItem items={mockData} />
      </Row>
    </div>
  );
};

export default ManpowerSupply;
