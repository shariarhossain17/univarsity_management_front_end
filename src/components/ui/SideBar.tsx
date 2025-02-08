"use client";

import { USER_ROLE } from "@/constants/role";
import { sideBarItems } from "@/constants/sideBarItems";

import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { useState } from "react";
const { Sider } = Layout;
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const role = USER_ROLE.SUPER_ADMIN;
  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <h1 className="text-white text-2xl">PH Univarsity</h1>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={sideBarItems(role)}
        />
      </Sider>
    </>
  );
};

export default SideBar;
