import React from "react";

import styles from "./home.module.css";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import AllPost from "../../components/all-post/AllPost";

const Home = () => {
  return (
    <div className="center">
      <Hero />
      <AllPost />
    </div>
  );
};

export default Home;
