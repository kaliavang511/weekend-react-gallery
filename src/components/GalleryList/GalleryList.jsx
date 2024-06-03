import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList(){
    const [galleryItems, setGalleryItem] = useState([])

    useEffect(() => {
        fetchGalleryItems();
      }, []);
    


const fetchGalleryItems = () =>{
    axios({
        method: 'GET',
        url: '/api/gallery'
      })
        .then((response) => {
          console.log('response.data is:', response.data);
  
        
          setGalleryItem(response.data);
        })
        .catch((error) => {
          console.log('Error on get:', error);
        });
  
}



return (
    <div data-testid="galleryList">
      {galleryItems.map(item => (
        <GalleryItem key={item.id} item={item} />
     
    ))}
    </div>
  );
}


export default GalleryList;