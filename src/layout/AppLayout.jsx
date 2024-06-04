import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
function AppLayout() {
    return (
      <div className=" ml-32 mr-32">
        <Navbar /> 
        <Outlet />
      </div>
    );
  }

  export default AppLayout