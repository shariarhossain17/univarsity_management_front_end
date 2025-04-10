"use client";
import { Layout } from "antd";
import React from "react";
import UMBreadcrumb from "./UMBreadcrumb";

const { Content: Contents } = Layout;

const Content = ({ children }: { children: React.ReactNode }) => {
  const base = "admin";
  return (
    <Contents>
      <UMBreadcrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: `student`,
            link: `/${base}/student`,
          },
        ]}
      ></UMBreadcrumb>
      {children}
    </Contents>
  );
};

export default Content;
