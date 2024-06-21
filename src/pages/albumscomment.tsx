import React from 'react'
import { useLoaderData} from 'react-router-dom';
import { useStore } from '../store';
import UsersId from './usersId';
interface Photoint{
    id:number,
    title:string,
    url:string,
    thumbnailUrl:string,
}

export const albumsCommentsLoader=async ({params}:any)=>{
    const response = await fetch (`https://jsonplaceholder.typicode.com/albums/${params.albumId}/photos`)
    const photos=await response.json()
    return photos
}

export default function Albumscomment() {
    const photos=useLoaderData() as Photoint[]
    const {addFavorite,removeFavorite,favorites}=useStore();

    const handleFavoriteClick=(photo:PhotoParams)=>{
      if (favorites.some(fav=>fav.id===photo.id)){
removeFavorite(photo.id)
      }  
      else{
        addFavorite({...photo,userId:Number(UsersId)});
      }   
    }
  return (
    <> 
    <div>
     <h1>Photos</h1>
     <ul>
        {photos.map((photo)=>(
            <li key={photo.id}><img src={photo.thumbnailUrl}/><h4>{photo.title}</h4>
            <button onClick={()=>handleFavoriteClick(photo)}>{favorites.some(fav=>fav.id===photo.id)?"unfavorite":"favorite"}</button>
            </li>          
        )
    
    )}
     </ul>
    </div>
    </>
  )
}
