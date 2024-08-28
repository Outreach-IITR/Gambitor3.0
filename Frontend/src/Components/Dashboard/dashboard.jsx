import React, { useState, useEffect } from "react";
import { Table, Button, Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import api from "../../https/api";
import styles from './dashboard.module.css'

const FilterDropdown = ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
    <div style={{ padding: 8 }}>
      <Input
        placeholder="Search"
        value={selectedKeys[0] || ''}
        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
        onPressEnter={confirm}
        style={{ marginBottom: 8, display: 'block' }}
      />
      <Space>
        <Button
          type="primary"
          onClick={confirm}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90 }}
        >
          Search
        </Button>
        <Button onClick={() => {
          setSelectedKeys([]); // Clear the filter input
          clearFilters(); 
        }} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </Space>
    </div>
  );

const Dashboard = () => {
  const [selectedTable, setSelectedTable] = useState("table1");
  const [data, setData] = useState([]);

  const handleTableChange = (table) => {
    setSelectedTable(table);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedTable === "table1") {
          const res = await api.get("/registration", {
            headers: { Authorization: `Bearer ${window.localStorage.getItem("token")}` },
          });
          setData(res.data.data);
        } else if (selectedTable === "table2") {
          const res = await api.get("/ambassadors", {
            headers: { Authorization: `Bearer ${window.localStorage.getItem("token")}` },
          });
          setData(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [selectedTable]);

  const handleDelete = async (userId) => {
    try {
      await api.delete(`/${userId}/delete`,{
        headers: { Authorization: `Bearer ${window.localStorage.getItem("token")}` },
      });
      setData(data.filter(user => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const columnsTable1 = [
    {
      title: "Name",
      dataIndex: "name",
      filterDropdown: (props) => <FilterDropdown {...props} />,
      onFilter: (value, record) => 
        (record.name?.toLowerCase() ?? '').startsWith(value.toLowerCase()) ,
      //  (record.name?.toLowerCase() ?? '').includes(value.toLowerCase()),
      
  
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      sorter: (a, b) => {
        const nameA = a?.name?.toLowerCase() ?? ''; // Default to empty string if null or undefined
        const nameB = b?.name?.toLowerCase() ?? ''; // Default to empty string if null or undefined
        return nameA.length - nameB.length;
      },
      sortDirections: ["descend"],
    },
    {
      title: "Category",
      dataIndex: "category",
      filterDropdown: (props) => <FilterDropdown {...props} />,
      onFilter: (value, record) => 
        (record.category?.toLowerCase() ?? '').startsWith(value.toLowerCase()) ,
    },
    {
      title: "Email",
      dataIndex: "email",
      filterDropdown: (props) => <FilterDropdown {...props} />,
      onFilter: (value, record) => 
        (record.email ?? '').startsWith(value) ,
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Phone",
      dataIndex: "contactNumber",
    },
    {
      title: "Referral Code Used",
      dataIndex: "referralCode",
      filterDropdown: (props) => <FilterDropdown {...props} />,
      onFilter: (value, record) => 
        (record.referralCode?.toLowerCase() ?? '').startsWith(value.toLowerCase())  ,
    },
    {
      title: "School Name",
      dataIndex: "schoolName",
      filterDropdown: (props) => <FilterDropdown {...props} />,
      onFilter: (value, record) => 
        (record.schoolName?.toLowerCase() ?? '').startsWith(value.toLowerCase()) ,
    },
    {
        title: "Actions",
        key: "actions",
        render: (text, record) => (
          <Button
            onClick={() => handleDelete(record.id)}
            danger
          >
            Delete
          </Button>
        ),
      },
  ];

  const columnsTable2 = [
    {
      title: "Name",
      dataIndex: "name",
      filterDropdown: (props) => <FilterDropdown {...props} />,
      onFilter: (value, record) => 
        (record.name?.toLowerCase() ?? '').startsWith(value.toLowerCase()) ,
  
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      sorter: (a, b) => {
        const nameA = a?.name?.toLowerCase() ?? ''; // Default to empty string if null or undefined
        const nameB = b?.name?.toLowerCase() ?? ''; // Default to empty string if null or undefined
        return nameA.length - nameB.length;
      },
      sortDirections: ["descend"],
    },
    {
      title: "Category",
      dataIndex: "category",
      filterDropdown: (props) => <FilterDropdown {...props} />,
      onFilter: (value, record) => 
        (record.category?.toLowerCase() ?? '').startsWith(value.toLowerCase()) ,
    },
    {
      title: "Email",
      dataIndex: "email",
      filterDropdown: (props) => <FilterDropdown {...props} />,
      onFilter: (value, record) => 
        (record.email?? '').startsWith(value) ,
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Phone",
      dataIndex: "contactNumber",
    },
    {
      title: "My Referral Code",
      dataIndex: "myReferral",
      filterDropdown: (props) => <FilterDropdown {...props} />,
      onFilter: (value, record) => 
        (record.myReferral?.toLowerCase() ?? '').startsWith(value.toLowerCase())  ,
    },
    {
        title: "Referral Count",
        dataIndex: "referralCount",
        sorter: (a, b) => {
          const valueA = Number.isInteger(a?.integerValue) ? a.integerValue : 0;
          const valueB = Number.isInteger(b?.integerValue) ? b.integerValue : 0;
          return valueA - valueB; // Ascending order
        },
        sortDirections: ["descend", "ascend"],
    },
    // {
    //     title: "School Name",
    //     dataIndex: "schoolName",
    // },
  ];

  return (
    <div>
      <div className={styles.buttonsContainer}>
        <button className={styles.tableButton} onClick={() => handleTableChange("table1")}>Show All Registrations</button>
        <button className={styles.tableButton} onClick={() => handleTableChange("table2")}>Show School Ambassadors</button>
      </div>
      <Table
        columns={selectedTable === "table1" ? columnsTable1 : columnsTable2}
        dataSource={data}
        rowKey={(record) => record.id}
      />
    </div>
  );
};

export default Dashboard;
