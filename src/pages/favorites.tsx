import React from 'react'
import { Link } from 'react-router-dom';
import { useStore } from '../store';


export default function Favorites() {
  const {favorites,removeFavorite}=useStore();
  console.log('Favorites:', favorites);
  return (
    <>
   <h1>Favoriler</h1>
   {
    favorites.map((photo:any)=>(
      <li key={photo.id}><img src="{photo.thumbnailUrl"/>
      <p>{photo.title}</p>
      <p>User:<Link to={`/users/${photo.userId}`}>{photo.userId}</Link></p>
      <button onClick={()=> removeFavorite(photo.id)}>Remove</button>
      </li>
    ))
   }
    </>
  )
}
