import React from "react";
import { Table } from "antd";

const History = ({ history, columns }) => {
  return (
    <Table
      dataSource={history}
      columns={columns}
      pagination={false}
      rowKey="ans"
    />
  );
};

export default History;
