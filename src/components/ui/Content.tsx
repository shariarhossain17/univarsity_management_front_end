"use client";
import { Layout } from "antd";
import React from "react";

const { Content: Contents } = Layout;

const Content = ({ children }: { children: React.ReactNode }) => {
  return <Contents>{children}</Contents>;
};

export default Content;
