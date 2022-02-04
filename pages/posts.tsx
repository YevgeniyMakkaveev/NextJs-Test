import type { NextPage, GetStaticProps } from 'next';
import { useState, useEffect } from 'react';
import { Layout } from '../components/layout';
import { IPost,  IPostRes } from '../types'; 

const Posts: NextPage<{posts:IPost[]}>=({posts})=>{
  
return(
 <Layout title='Posts'>
  <ul>
   {posts.map((x:IPost)=><><li key={x.id}>{x.title}</li>
   <li>{x.body}</li></>)}
  </ul>
 </Layout>

)
}
export const  getStaticProps:GetStaticProps= async (ctx)=>{
    const response = await fetch('http://localhost:4200/posts')
  const posts:IPostRes = await response.json();
  return {props: {posts}}}
 
export default Posts;