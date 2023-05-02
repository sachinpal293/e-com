import Layout from "../../components/layout/Layout";
import React, { useState } from "react";
import  Toast  from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/AuthStyle.css";
import { useAuth } from "../../context/auth";

const Login = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth()

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        {
          email,
          password
        }
      );
      if (res.data.success) {
        Toast.success(res.data.message);
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token,
        });
        localStorage.setItem('auth',JSON.stringify(res.data))
        navigate("/");
      } else {
        Toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      Toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Login-page"}>
      <div className="form-container">
        <h1 className="title">LOGIN FORM</h1>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter the Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
