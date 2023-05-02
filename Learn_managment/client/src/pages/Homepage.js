import React from "react";
import Layout from "../components/layout/Layout";
import { useAuth } from "../context/auth";
import Hero from "./Hero.js";
import Card from "./Card";
import Sdata from "./Sdata";
const Homepage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      {/* <h1>Homepage</h1> */}
      {/* <pre>{JSON.stringify(auth,null, 4)}</pre> */}
      <Hero />
      <div className="container mt-4 pt-5 ">
        <h1 className="">Courses By Category</h1>
        <h5 className="p-2 pb-5">COURSES DESIGNED FOR CONTINUOUS LEARNING TO EXCELL IN ANY FIELD</h5>
        {Sdata.map((val) => {
          return (
            <Card
              sname={val.sname}
              src={val.imgsrc}
              links={val.links}
              title={val.title}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default Homepage;
