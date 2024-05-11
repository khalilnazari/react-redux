import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export const PageLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
