import {create} from "zustand";
import { persist } from "zustand/middleware";

interface Photoint{
    id:number,
    title:string,
    url:string,
    thumbnailUrl:string,
userId:number,
}

export const useStore=create(
    persist(
        (set)=>(
            {
                favorites:[],
                addFavorite:(photo:Photoint)=> set((state)=>({favorites:[...state.favorites,photo]}))
                ,removeFavorite:(id:number)=>set((state)=>({
                    favorites:state.favorites.filter((photo)=>photo.id!==id)
                }))
            }
        ),{name:"favorites-storage", }
        
    )
)