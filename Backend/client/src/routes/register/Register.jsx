import "./register.scss"; 
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";

function Register() {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate(); //navigate to login page

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        setIsLoading(true)
        const formData = new FormData(e.target);

        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");

        console.log(username, email, password);
    try{
        const res = await apiRequest.post("/auth/register", {
            username, email, password
        })
        navigate("/login");
    }catch(error) {
      
        setError(error.response.data.message);
    } finally {
        setIsLoading(false);
    }
    
};
    return (
        <div className="registerPage">
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Create an Account</h1>
                    <input type="text" name="username" placeholder="Username" />
                    <input type="text" name="email" placeholder="Email"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <button disabled={isLoading}>Register</button>
                    {error && <span>{error}</span>}
                    <Link to="/login">Dou you have an account?</Link>
                </form>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
                </div>
            </div>
        
    );
}

export default Register;