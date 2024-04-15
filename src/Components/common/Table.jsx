import React, { useState, useEffect } from "react";
import { Table, Pagination, Space } from "antd";
import {
  updateDeletePage,
  updateEditPage,
} from "../../redux/slices/userManagementReducer";
import { useDispatch } from "react-redux";

function CommonTable({ isEdit, color, data, userdetailfun, DeleteUser }) {
  const [dataSource, setDataSource] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const dispatch = useDispatch();
  console.log(data, "j");
  useEffect(() => {
    console.log("hi", data);
    const timeout = setTimeout(() => setDataSource(data), 1000);

    return () => clearTimeout(timeout);
  }, []);

  const handlePaginationChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };
  const DeleteUserDetails = (data) => {
    dispatch(
      updateDeletePage({
        showAdd: true,
        userEmail: data?.email,
      })
    );
  };
  const FilterEditPage = (data) => {
    console.log(data);
    dispatch(
      updateEditPage({
        showAdd: true,
        userEmail: data?.email,
      })
    );
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Role", dataIndex: "role", key: "role" },
    { title: "School/Student Id", dataIndex: "schoolid", key: "schoolid" },
    { title: "Created At", dataIndex: "created", key: "created" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space
          size="middle"
          style={{ cursor: "pointer" }}
          onClick={() => (isEdit ? FilterEditPage(_) : DeleteUserDetails(_))}
        >
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

  const paginatedData = data?.slice(
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
