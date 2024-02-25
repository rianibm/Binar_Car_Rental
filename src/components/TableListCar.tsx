// TableListOrder.tsx

import React from "react";
import { Table, Space, Tag } from "antd";
import type { TableColumnsType } from "antd";
import type { Key } from "antd/es/table/interface";
import moment from "moment";

interface OrderDataType {
  key: React.Key;
  No: number;
  price: number;
  transmission: string;
  carName: string;
  startRent: string;
  finishRent: string;
  status: boolean;
}

const columns: TableColumnsType<OrderDataType> = [
  {
    title: "No",
    dataIndex: "No",
  },
  {
    title: "Car",
    dataIndex: "carName",
    sorter: (a, b) => a.carName.localeCompare(b.carName),
  },
  {
    title: "Category",
    dataIndex: "transmission",
    sorter: (a, b) => a.transmission.localeCompare(b.transmission),
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
    carName: "Car A",
    transmission: "Manual",
    price: 100,
    startRent: "2024-02-25T10:00:00",
    finishRent: "2024-02-26T15:00:00",
    status: true,
  },
  {
    key: "2",
    No: 2,
    carName: "Car A",
    transmission: "Matic",
    price: 100,
    startRent: "2024-02-25T10:00:00",
    finishRent: "2024-02-26T15:00:00",
    status: true,
  },
  {
    key: "3",
    No: 3,
    carName: "Car A",
    transmission: "Matic",
    price: 100,
    startRent: "2024-02-25T10:00:00",
    finishRent: "2024-02-26T15:00:00",
    status: false,
  },
];

const TableListCar: React.FC = () => {
  const pageSizeOptions = ["10", "20", "50"];

  return (
    <div>
      <h2 className="font-bold text-lg">List Car</h2>
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

export default TableListCar;
