import React, { useEffect, useState } from "react";
import { Table } from "antd";

const MappingTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMappings = async () => {
      const res = await fetch("/api/product");
      const json = await res.json();
      setData(json);
    };
    fetchMappings();
  }, []);

  const columns = [
    {
      title: "Product Name",
      dataIndex: ["product", "product_name"],
      key: "product_name",
    },
    {
      title: "Brand",
      dataIndex: ["product", "product_brand"],
      key: "product_brand",
    },
    {
      title: "Created Date",
      dataIndex: ["product", "created_date"],
      key: "created_date",
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Owner",
      dataIndex: ["owner", "owner_name"],
      key: "owner_name",
    },
  ];

  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 5 }}
    />
  );
};

export default MappingTable;
