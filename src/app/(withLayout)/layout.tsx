import Content from "@/components/ui/Content";
import SideBar from "@/components/ui/SideBar";
import { Layout } from "antd";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout style={{ minHeight: "100vh" }} hasSider>
      <SideBar></SideBar>
      <Content>{children}</Content>
    </Layout>
  );
};

export default DashBoardLayout;
