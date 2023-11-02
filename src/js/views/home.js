import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css"

export const Home = () => (

  <div className="text-center mt-5">

    <h1 className="title">Welcome to contac list site</h1>

    <Link to="/demo">

      <button className="btn btn-primary">Check the Context in action</button>

    </Link>

  </div>
);
