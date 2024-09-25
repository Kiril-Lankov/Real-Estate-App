import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {

    const [open,setOpen] = useState(false);
    const user = true;
    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="" />
                    <span>KiTo Estate</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
           
           <div className="right">
           { user ? (<div className="user">
            <img src="/john-doe.jpg" alt="" />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
            <div className="notification">3</div>
            <span>Profile</span>
            </Link>
           </div>) 
           : 
           ( <>
                <a href="/">Sign In</a>
                <a href="/" className="register">Sign Up</a>
                </>
            )}
                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={() => setOpen((prev)  => !prev)} />
                </div>
                <div className={open? "menu active" : "menu"}>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
                <a href="/">Sign In</a>
                <a href="/">Sign Up</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;