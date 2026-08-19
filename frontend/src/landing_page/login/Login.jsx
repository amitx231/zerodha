import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


export default function Login()
{
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        // console.log("Email",email);
        // console.log("Password",password);
        try {
            const response = await fetch(
                "http://localhost:8080/api/auth/login",
                {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    credentials: "include",
                    body:JSON.stringify({
                        email,
                        password
                    })
                }
            );
            const data = await response.json();
            if(response.ok)
            {
                console.log("Login Successfully!");
                console.log(data);
                window.location.href="http://localhost:5174";
            }
            else{
                console.log(data.message);
            }
        } catch (error) {
            console.log("Login Error : ",error);
        }

    };

    return (
        <div className="container d-flex justify-content-center align-items-center py-4">

            <div className="card p-4 shadow" style={{ width: "400px" }}>

                <h1 className="text-center mb-4">
                    Login
                </h1>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                    >
                        Login
                    </button>

                </form>
                <p className="text-center mt-3 mb-0">
                    Don't have an account?{" "}
                    <a href="/signup">Register</a>
                </p>

            </div>

        </div>
    );
}