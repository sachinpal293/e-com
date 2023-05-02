import React, {useState}from "react";
import Layout from "../../components/layout/Layout";
import toast from 'react-hot-toast';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import "../../styles/AuthStyle.css";

const Register = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const navigate = useNavigate();
    
    //  form function to handle Submit
    const handleSubmit = async (e) =>{
        e.preventDefault();
         try{
          const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,
          {
            name,email,password,phone,address
          });
          if(res.data.success){
            toast.success(res.data.message)
            navigate("/login");
          }
          else{
            toast.error(res.data.message)
          }
         }catch(error)
         {
            console.log(error);
            toast.error('Something went wrong');
         }
    }
  return (
    <Layout title={"Register"}>
      <div className="form-container">
        <h1 className="title">Register Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              value = {name}
              onChange={(e)=>setName(e.target.value)}
              className="form-control"
              id="exampleInputName"
              placeholder="Enter your Name : "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
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
              onChange={(e)=>setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              type="text"
              value = {address}
              onChange={(e)=>setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your address"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
