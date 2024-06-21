import React from 'react'
import { useLoaderData } from 'react-router-dom'

interface Postsint{
  userId:number,
  id:number,
  title:string,
  body:boolean,
}

export const userPostLoader=async ({params})=>{
  const response =await fetch (`https://jsonplaceholder.typicode.com/users/${params.userId}/posts`)
  const posts=await response.json();
  return posts
}

export default function UsersPosts(){
  const posts=useLoaderData() as Postsint[];
  return(
    <>
    <div>Posts</div>
    <ul>
      {posts.map (post=>
        (
          <li key={post.id}>{post.title}</li>
        )
      )}
    </ul>
    
    
    </>
  )
}

