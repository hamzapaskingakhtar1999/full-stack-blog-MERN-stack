import React from "react";

import styles from "./home.module.css";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import AllPost from "../../components/all-post/AllPost";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import Login from "../../pages/login/Login";

const Home = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  return (
    <div>
      {!cookies.access_token ? (
        <Login />
      ) : (
        <div className="center">
          <Hero />
          <AllPost />
        </div>
      )}
    </div>
  );
};

export default Home;
