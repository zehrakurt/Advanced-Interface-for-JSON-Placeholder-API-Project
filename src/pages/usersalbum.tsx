import React from 'react'
import {useLoaderData} from 'react-router-dom';

interface albumint{
  userId:number;
  id:number;
  title:string;
}

export const userAlbumsLoader=async ({params}) =>{
  const response = await fetch (`https://jsonplaceholder.typicode.com/users/${params.userId}/albums`)
const albums=await response.json();
return albums

}
export default function Usersalbum() {
  const albums=useLoaderData() as albumint[];
  return (
    <> 
    <div>
     Albums
    </div>
    <ul>
      {albums.map(album=>(
        <li key={album.id}>{album.title}</li>
      ))}
    </ul>
    </>
  )
}
