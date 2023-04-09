import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const SharedLayout = () => {
  return (
    <div className="container">
      <Header/>

      <Outlet/>

      <Footer/>
    </div>
  );
};
export default SharedLayout;
