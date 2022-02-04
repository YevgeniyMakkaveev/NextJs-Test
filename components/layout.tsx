import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";

interface ILayout {
  children: ReactNode;
  title: string;
}
export const Layout: React.FC<ILayout> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title} page</title>
        <meta name="keywords" content="js react nextjs scss" />
        <meta name="description" content="nextjs test project" />
        <meta charSet="UTF-8" />
      </Head>
      <nav>
        <Link href={"/"}> Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href="/posts">Posts</Link>
      </nav>
      <main>
       <h1> {title} page</h1>
       <br/>
        {children}
      </main>
      <style jsx>
        {
          /*css */ `
            nav {
              position: fixed;
              height: 60px;
              left: 0;
              right: 0;
              top: 0;
              background: darkblue;
              display: flex;
              justify-content: space-around;
              align-items: center;
              color: white;
            }
            main {
              margin-top: 60px;
              padding: 1rem;
            }
          `
        }
      </style>
    </>
  );
};
