import { useState } from "react";
import axios from "axios";

function GalleryItem({item}){
    const [showImage, setShowImage]=useState(true)
    const [likes, setLikes]=useState(item.likes)


    const toggleImage = () =>{
        setShowImage(!showImage)
    }

    const likeItem = () => {
        console.log('item id',item.id)

        axios({
            method: "PUT",
            url: `/api/gallery/like/${item.id}`
        
        })
        .then((response) => {
            setLikes(prevLikes => prevLikes + 1);
           
        })
        .catch((error) => {
            console.log('Error', error);
            alert('Something went wrongggg');
        });
    };
   
    
    return(
        <div>
        <div data-testid="galleryItem">
        <h2>{item.title}</h2>
        {showImage ? (
     <img data-testid="toggle"src={item.url} alt={item.title} onClick={toggleImage} />) : ( <p data-testid="toggle" onClick={toggleImage}>{item.description}</p> )}
        <button onClick={likeItem} data-testid="like">
          Like ❤️ 
        </button>
        <p>{likes} person loves this</p>
      </div>
</div>
    )

    }

  export default GalleryItem  

