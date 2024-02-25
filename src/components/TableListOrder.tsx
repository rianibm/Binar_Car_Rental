// TableListOrder.tsx

import React from "react";
import { Table, Space, Tag } from "antd";
import type { TableColumnsType } from "antd";
import type { Key } from "antd/es/table/interface";
import moment from "moment";

interface OrderDataType {
  key: React.Key;
  No: number;
  userEmail: string;
  carName: string;
  startRent: string;
  finishRent: string;
  price: number;
  status: boolean;
}

const columns: TableColumnsType<OrderDataType> = [
  {
    title: "No",
    dataIndex: "No",
  },
  {
    title: "User Email",
    dataIndex: "userEmail",
    sorter: (a, b) => a.userEmail.localeCompare(b.userEmail),
  },
  {
    title: "Car Name",
    dataIndex: "carName",
    sorter: (a, b) => a.carName.localeCompare(b.carName),
  },
  {
    title: "Start Rent",
    dataIndex: "startRent",
    sorter: (a, b) =>
      moment(a.startRent).valueOf() - moment(b.startRent).valueOf(),
  },
  {
    title: "Finish Rent",
    dataIndex: "finishRent",
    sorter: (a, b) =>
      moment(a.finishRent).valueOf() - moment(b.finishRent).valueOf(),
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Status",
    dataIndex: "status",
    filters: [
      { text: "Finish", value: true },
      { text: "End", value: false },
    ],
    onFilter: (value, record) => record.status === value,
    render: (status: boolean) => (
      <Tag color={status ? "green" : "red"}>{status ? "Finish" : "End"}</Tag>
    ),
  },
];

const data: OrderDataType[] = [
  {
    key: "1",
    No: 1,
    userEmail: "john@example.com",
    carName: "Car A",
    startRent: "2024-02-25T10:00:00",
    finishRent: "2024-02-26T15:00:00",
    price: 100,
    status: true,
  },
  {
    key: "2",
    No: 2,
    userEmail: "john@example.com",
    carName: "Car A",
    startRent: "2024-02-25T10:00:00",
    finishRent: "2024-02-26T15:00:00",
    price: 100,
    status: true,
  },
  {
    key: "3",
    No: 3,
    userEmail: "john@example.com",
    carName: "Car A",
    startRent: "2024-02-25T10:00:00",
    finishRent: "2024-02-26T15:00:00",
    price: 100,
    status: true,
  },
  {
    key: "4",
    No: 4,
    userEmail: "john@example.com",
    carName: "Car A",
    startRent: "2024-02-25T10:00:00",
    finishRent: "2024-02-26T15:00:00",
    price: 100,
    status: true,
  },
  {
    key: "5",
    No: 5,
    userEmail: "john@example.com",
    carName: "Car A",
    startRent: "2024-02-25T10:00:00",
    finishRent: "2024-02-26T15:00:00",
    price: 100,
    status: true,
  },
  {
    key: "6",
    No: 6,
    userEmail: "john@example.com",
    carName: "Car A",
    startRent: "2024-02-25T10:00:00",
    finishRent: "2024-02-26T15:00:00",
    price: 100,
    status: true,
  },
  {
    key: "7",
    No: 7,
    userEmail: "john@example.com",
    carName: "Car A",
    startRent: "2024-02-25T10:00:00",
    finishRent: "2024-02-26T15:00:00",
    price: 100,
    status: true,
  },
  {
    key: "8",
    No: 8,
    userEmail: "john@example.com",
    carName: "Car A",
    startRent: "2024-02-25T10:00:00",
    finishRent: "2024-02-26T15:00:00",
    price: 100,
    status: true,
  },
  {
    key: "9",
    No: 9,
    userEmail: "john@example.com",
    carName: "Car A",
    startRent: "2024-02-25T10:00:00",
    finishRent: "2024-02-26T15:00:00",
    price: 100,
    status: true,
  },
  {
    key: "10",
    No: 10,
    userEmail: "john@example.com",
    carName: "Car A",
    startRent: "2024-02-25T10:00:00",
    finishRent: "2024-02-26T15:00:00",
    price: 100,
    status: true,
  },
  {
    key: "11",
    No: 11,
    userEmail: "john@example.com",
    carName: "Car A",
    startRent: "2024-02-25T10:00:00",
    finishRent: "2024-02-26T15:00:00",
    price: 100,
    status: false,
  },
];

const TableListOrder: React.FC = () => {
  const pageSizeOptions = ["10", "20", "50"];

  return (
    <div>
      <h2 className="font-bold text-lg">List Order</h2>
      <Table<OrderDataType>
        columns={columns}
        dataSource={data}
        pagination={{
          showSizeChanger: true,
          pageSizeOptions: pageSizeOptions,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
          itemRender: (current, type, originalElement) => {
            if (type === "jump-prev" || type === "jump-next") {
              return <a>...</a>;
            }
            return originalElement;
          },
        }}
      />
    </div>
  );
};

export default TableListOrder;
