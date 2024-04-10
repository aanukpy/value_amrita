import React, { useState, useEffect } from "react";
import { Table, Pagination, Space } from "antd";

const data = [
  {
    id: 1,
    name: "Arun Prabhu",
    age: 10,
    city: "New York",
    phonenumber: "1234567897",
    gender: "Male",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    city: "London",
    phonenumber: "1234567897",
    gender: "Male",
  },
  {
    id: 3,
    name: "Jane Smith",
    age: 25,
    city: "London",
    phonenumber: "1234567897",
    gender: "Male",
  },
  {
    id: 4,
    name: "Jane Smith",
    age: 25,
    city: "London",
    phonenumber: "1234567897",
    gender: "Male",
  },
];

function CommonTable({ isEdit, color }) {
  const [dataSource, setDataSource] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(2);

  useEffect(() => {
    const timeout = setTimeout(() => setDataSource(data), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handlePaginationChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Phone Number", dataIndex: "phonenumber", key: "phonenumber" },
    { title: "Gender", dataIndex: "gender", key: "gender" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <i
            className={`fa-solid ${
              isEdit ? "fa-pencil-square" : "fa-trash"
            } text-${color}`}
            style={{ marginRight: 10, fontSize: 20 }}
          />
        </Space>
      ),
    },
  ];

  const paginatedData = dataSource.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      <Table
        style={{ width: "100%", marginTop: 20 }}
        columns={columns}
        dataSource={paginatedData}
        pagination={false}
      />
      <Pagination
        style={{ marginTop: 10 }}
        current={currentPage}
        pageSize={pageSize}
        onChange={handlePaginationChange}
        total={dataSource.length}
        showSizeChanger={true}
        pageSizeOptions={[10, 20, 50]}
      />
    </>
  );
}

export default CommonTable;
