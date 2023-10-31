import React from "react";

import styles from "./home.module.css";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Latest from "../../components/latest/Latest";
import Categories from "../../components/categories/Categories";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="center">
      <Hero />
      <Categories />
    </div>
  );
};

export default Home;
