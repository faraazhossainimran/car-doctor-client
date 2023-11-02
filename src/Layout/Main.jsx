import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../shared/NavBar";

const Main = () => {
  return (
    <div>
        <NavBar></NavBar>
      <Outlet></Outlet>
      <div className="bg-base-200">
        <div className="container mx-auto">
         <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Main;
