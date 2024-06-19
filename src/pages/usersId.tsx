import React from 'react'
import { Link, useLoaderData} from "react-router-dom";
import { useParams } from 'react-router-dom';
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
  }
export const userLoader=async ({params}) =>{
    const response=await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    const users = await response.json();
    return users;
}
export default function UsersId() {
    const user=useLoaderData() as User
    const {userId} =useParams()
  return (
    <> 
    <div>
      <h1> {user.name}</h1>
      <h5>{user.username} </h5>
      <h5>{user.email} </h5>
    </div>
    <div>
      <ul>
        <li>
          <Link to ={`/users/${userId}/posts`}>Posts</Link>
        </li>
        <li>
          <Link to ={`/users/${userId}/todos`}>todos</Link>
        </li>
        <li>
          <Link to ={`/users/${userId}/album`}>album</Link>
        </li>
      </ul>
    </div>
    </>
  )
}
