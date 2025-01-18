import { UserOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import Link from "next/link";
const sideBarItems = (role: string) => {
  const defaultSideBars: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <UserOutlined></UserOutlined>,
      children: [
        {
          label: "Account Profile",
          key: "profile",
        },
        {
          label: "Change Password",
          key: "profile",
        },
      ],
    },
  ];

  const adminSideBar: MenuProps["items"] = [
    {
      label: <Link href={`${role}/manage-students`}>Manage Students</Link>,
      key: "manage-students",
    },
  ];

  if (role === "student") return defaultSideBars;
  else if (role === "admin") return adminSideBar;
};

export default sideBarItems;
