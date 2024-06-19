import React from 'react'
import { useLoaderData } from 'react-router-dom'

interface Todosint{
  userId:number,
  id:number,
  title:string,
  completed:boolean,
}

export const userTodosLoader=async ({params})=>{
  const response=await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/todos`)
  const todos=await response.json();
  return todos
}

export default function Userstodos() {
  const todos=useLoaderData() as Todosint [];
  return (
    <> 
    <div>
     Todos
    </div>
    <ul>
      {todos.map (todo=>(
        <li key ={todo.id}><input type="checkbox" checked={todo.completed} />{todo.title}</li>
        
      )

      )}
    </ul>
    </>
  )
}
