import { useLoaderData, Link } from "react-router-dom";
import React from "react";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
  }
  

export const usersLoader = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const users = await response.json();
      return users;
    } catch (error) {
      console.error('Failed to load users:', error);
      throw error;
    }
  };
  


  export default function Users() {
    const users = useLoaderData() as User[];
  
    return (
      <>
        <h1>Users</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }