import { createContext,useState } from "react";
export const FavoritesContext = createContext({
    ids:[],
    addFavorite:(id)=>{},
    removeFavorite:(id)=>{},
    isFavorite:()=>{},
});


function FavoritesContextProvider({children}) {
    const [favoritesFoodIds, setfavoritesFoodIds] = useState([])

    function addFavorite(id){
        setfavoritesFoodIds((current)=>[...current,id])
    }

    function removeFavorite(id){
        setfavoritesFoodIds((current)=>current.filter((foodId)=>foodId!==id))
    }

    const value = {
        ids:favoritesFoodIds,
        addFavorite:addFavorite,
        removeFavorite:removeFavorite,
        
    }
    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider;