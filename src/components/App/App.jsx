import { useState } from "react";
import axios from 'axios'
import { useEffect  } from "react";

function App() {
  const [galleryList, setGalleryList] = useState([]);


  const fetchGalleryList = () => {
    axios({
      method: 'GET',
      url: '/api/gallery'
    })
      .then((response) => {
        console.log('response.data is:', response.data);

        // Store the creatures array in React state:
        setGalleryList(response.data);
      })
      .catch((error) => {
        console.log('Error on get:', error);
      });
  }
  useEffect( () => {
    fetchGalleryList();
  }, [])


    return (

    <div>
      <header>
        <h1>React Gallery</h1>
      </header>

      <p>The gallery goes here!</p>
      <img src="images/goat_small.jpg"/>
      <img src="images/goat_stache.png"/>
    
      <p>
      {galleryList.map((gallery)=>{
            console.log('gallery is',gallery)
          return(
            <p key={gallery.id}> {gallery.title} {gallery.description}</p>
          )
        })}
        </p>
      
    </div>
    )  

}

export default App;
      

