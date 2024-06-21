import React from 'react'
import { useLoaderData } from 'react-router-dom';
interface Postintt{
    userId:number;
    id:number,
    body:string,
    title:string,
}
interface Commentsint{
    postId:number,
    id:number,
    name:string,
    email:string,
    body:string,
}

export const postLoader= async ({params} : any)=>{
    const postResponse=await fetch (`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const post = await postResponse.json();
    
    const commentResponse = await fetch (`https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`)
    const comments=await commentResponse.json();
    return {post,comments}
}

export default function Posts2() {
    const {post,comments}=useLoaderData() as {post:Postintt; comments:Commentsint[]};
  return (
    <> <div> 
    <div>
      {post.title}
    </div>
    <div>{post.body}</div>
    <div>Comments</div>
    <ul>
        {comments.map((comment)=>(
            <li key={comment.id}>{comment.body}</li>
        ))}
    </ul></div>
    </>
  )
}
