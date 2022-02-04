import type { NextPage } from "next";
import Router from "next/router";
const About: NextPage = () => {
  return (
    <>
    <h1>Error 404</h1>
    <button onClick={()=>Router.push("/")}>Go Home</button>
    <style jsx>
     {
      `button {
       display: block;
      }
      h1 {
       color: crimson;
      }`
     }
    </style>
    </>
  );
};
export default About;
