import React, { useState } from "react";
import { Button, Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "sub1", <img src="/fi_home.svg" alt="Home Icon" />, [
    getItem("Dashboard", "1"),
  ]),
  getItem("Cars", "sub2", <img src="/fi_truck.svg" alt="Car Icon" />, [
    getItem("List Cars", "2"),
  ]),
];

const Navside: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuClick = (key: string) => {
    if (key === "2") {
      navigate("/car-management");
    }
    if (key === "1") {
      navigate("/admin-dashboard");
    }
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        className="bg-primary text-white"
        inlineCollapsed={collapsed}
        items={items}
        onClick={({ key }) => handleMenuClick(key as string)}
      />
    </div>
  );
};

export default Navside;
