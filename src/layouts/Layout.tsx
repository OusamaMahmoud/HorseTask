import { Outlet } from "react-router";
import PageHeader from "../components/common/PageHeader";

const Layout = () => {
  return (
    <div>
      <PageHeader />
      <Outlet />
    </div>
  );
};

export default Layout;
