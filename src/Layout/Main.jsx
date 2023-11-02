import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Outlet></Outlet>
      <div className="bg-[#151515] ">
        <div className="container mx-auto">
         <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Main;
