import { Button, Popconfirm, Table } from "antd";
import useMessage from "antd/es/message/useMessage";
import React from "react";
import { Link } from "react-router-dom";

const List = () => {
  const { message, contextHolder } = useMessage();

  return (
    <div>
      {contextHolder}

      <Button>
        <Link to="/add">THem san pham</Link>
      </Button>
      <Button>
        <Link to={`/signin`}>Login</Link>
      </Button>
      <Button>
        <Link to={`/signup`}>Register</Link>
      </Button>
      <Table
        dataSource={data}
        loading={isLoading}
        columns={[
          {
            title: "title",
            dataIndex: "title",
          },
          {
            title: "description",
            dataIndex: "description",
          },
          {
            title: "status",
            dataIndex: "status",
            render: (status) => (status ? "Hoan thanh" : "chua Hoan thanh"),
          },
          {
            title: "dueDate",
            dataIndex: "dueDate",
          },
          {
            title: "priority",
            dataIndex: "priority",
          },
          {
            title: "hanh dong",
            render: (_, item: { id: number }) => (
              <>
                <Popconfirm
                  title="ban co muon xoa kgong"
                  onConfirm={() => mutate(item.id)}
                >
                  <Button>xoa</Button>
                </Popconfirm>
                <Button>
                  <Link to={`/edit/${item.id}`}>sua</Link>
                </Button>
              </>
            ),
          },
        ]}
      ></Table>
    </div>
  );
};

export default List;
