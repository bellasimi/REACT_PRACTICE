import type { NextPage } from "next";
import { useEffect, useRef, Component } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const callbackRef = (element: any) => {
    console.log(element);
  };

  return (
    <div ref={callbackRef}>
      <button></button>
      <button></button>
    </div>
  );
};

export default Home;
