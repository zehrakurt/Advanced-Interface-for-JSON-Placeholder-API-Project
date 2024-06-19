import React from 'react'
import { useLoaderData} from "react-router-dom";
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
    <div>
      <h1> {user.name}</h1>
      <h5>{user.username} </h5>
      <h5>{user.email} </h5>
    </div>
  )
}
