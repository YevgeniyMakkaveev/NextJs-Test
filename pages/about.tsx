import type { NextPage } from "next";
import Router from "next/router";
import { Layout } from "../components/layout";
const About: NextPage = () => {
  const linkClick = () => {
    Router.push("/");
  };
  return (
    <Layout title="About">
      <button onClick={linkClick}>Go home</button>
      <button onClick={() => Router.push("/posts")}>Go Posts</button>
    </Layout>
  );
};
export default About;
