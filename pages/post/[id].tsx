import type { NextPage,GetServerSideProps } from 'next'
import { useRouter } from 'next/router';
import {IPost,  IPostRes} from "../../types"
import { Layout } from '../../components/layout';

const Post:NextPage<{post:IPost}>=({post})=>{
 const router = useRouter();

return(
<Layout title={`Post ${router.query.id}`}>
 <h1>{post.title}</h1>
 <h4>{post.body}</h4>
 </Layout>

)
}

export const getServerSideProps:GetServerSideProps =  async(context) => {
 const res = await fetch(`http://localhost:4200/posts/${context.query.id}`)
  const post = await res.json()

  return {
    props: {
      post
    },
  };
};
export default Post;