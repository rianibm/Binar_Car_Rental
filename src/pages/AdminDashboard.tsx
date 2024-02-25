// AdminDashboardPage.tsx
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Button, Input, Dropdown, Menu, theme } from "antd";
import Navside from "../components/Navside";
import SearchBar from "../components/SearchBar";
import TableListOrder from "../components/TableListOrder";
import TableListCar from "../components/TableListCar";

const { Header, Sider, Content } = Layout;

const AdminDashboardPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="bg-primary text-white" />
        <Navside />
      </Sider>
      <Layout>
        <Header
          style={{ padding: 0, background: colorBgContainer }}
          className="flex items-center justify-between"
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div style={{ float: "right", marginRight: 24, display: "flex" }}>
            <SearchBar />
            <Dropdown overlay={menu}>
              <Button
                type="text"
                icon={<UserOutlined />}
                style={{ marginLeft: 8 }}
              >
                User
              </Button>
            </Dropdown>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            // background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflowY: "auto", // Allow vertical scrolling
          }}
          className="h-screen"
        >
          <h1 className="font-bold text-2xl">Dashboard</h1>
          <TableListOrder />
          <TableListCar />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboardPage;
