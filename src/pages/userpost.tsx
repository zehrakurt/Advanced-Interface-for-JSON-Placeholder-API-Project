import React from 'react'
import { useLoaderData } from 'react-router-dom';

interface Postint{
  id:number;
  userıd:number;
  title:string;
  body:string;
}

export const userPostLoader=async ({params}) =>{
  const response=await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/posts`);
  const posts = await response.json();
  return Array.isArray(posts) ? posts : [];
}


export default function Userpost() {
  const posts=useLoaderData() as Postint[];
  return (
    <> 
    <div>
    Posts
    </div>
    <ul>
{ posts.map(post=> (
  <li key={post.id}>{post.body}</li>
))}
    </ul>
    </>
  )
}
