import React, { useEffect, useState } from "react";
import { Table } from "antd";

const MappingTable = () => {
  const [data, setData] = useState([]);
const [mounted, setMounted] = useState(false);


useEffect(() => {
  const fetchMappings = async () => {
    const res = await fetch("/api/product");
    const json = await res.json();
    setData(json);
    setMounted(true); // supaya Table hanya render di client, menghindari SSR CSS flicker
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
    <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-2xl border border-white/20 p-6 relative overflow-hidden">
       {mounted && (
      <Table
        rowKey="id"
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
        className="custom-ant-table"
      />
       )}
     
    </div>
  );
};

export default MappingTable;
