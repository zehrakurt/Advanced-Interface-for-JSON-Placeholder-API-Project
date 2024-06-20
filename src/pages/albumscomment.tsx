import React from 'react'
import { useLoaderData} from 'react-router-dom';
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
  return (
    <> 
    <div>
     <h1>Photos</h1>
     <ul>
        {photos.map((photo)=>(
            <li key={photo.id}><img src={photo.thumbnailUrl}/><h4>{photo.title}</h4>
            <button>Favorite</button>
            </li>          
        )
    
    )}
     </ul>
    </div>
    </>
  )
}
