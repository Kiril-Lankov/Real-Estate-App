import "./layout.scss";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useEffect } from "react";
import {Navigate} from "react-router-dom";

function Layout() {

    return (
    <div className='layout'>
      <div className="navbar">
       <Navbar/>
      </div> 
      <div className="content">
        <Outlet/>
    </div>
    </div>
    )
}

export default Layout;

function RequireLayout() {

  const {currentUser} = useContext(AuthContext);
useEffect (() => {
  if (!currentUser) {
<Navigate to="/login"/>  }
})
 
  return (
 currentUser && <div className='layout'>
    <div className="navbar">
     <Navbar/>
    </div> 
    <div className="content">
      <Outlet/>
  </div>
  </div>
  )
}
