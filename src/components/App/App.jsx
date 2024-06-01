import { useState } from "react";
import axios from 'axios'
import { useEffect  } from "react";
import './App.css';

function App() {
  const [galleryList, setGalleryList] = useState([]);
  let [numLikes, setNumLikes] = useState(0)
  let [numLikes2, setNumLikes2] = useState(0)
  let [numLikes3, setNumLikes3] = useState(0)


  const handleClick = () => {
    setNumLikes(numLikes + 1)
  }

  const handleClick2 = () => {
    console.log("handleClick was executed")
    setNumLikes2(numLikes2 + 1)
  }

  const handleClick3 = () => {
    console.log("handleClick was executed")
    setNumLikes3(numLikes3 + 1)
  }


  //put route



  

  const fetchGalleryList = () => {
    axios({
      method: 'GET',
      url: '/api/gallery'
    })
      .then((response) => {
        console.log('response.data is:', response.data);

      
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
      

    <div className="container">
      <div className="image-wrapper">
        <img src="images/goat_small.jpg"/>
        <div className="button-wrapper">
          <button onClick={() => handleClick()}>
            Like ❤️
          </button>
          <div>{numLikes} people love this</div>
        </div>
      </div>
  
      <div className="image-wrapper">
        <img src="images/goat_stache.png"/>
        <div className="button-wrapper">
          <button onClick={() => handleClick2()}>
            Like ❤️
          </button>
          <div>{numLikes2} people love this</div>
        </div>
      </div>
  
      <div className="image-wrapper">
        <img src="https://media-be.chewy.com/wp-content/uploads/2021/06/01091747/Japanese-Chin-FeaturedImage-1024x615.jpg"/>
        <div className="button-wrapper">
          <button onClick={() => handleClick3()}>
            Like ❤️
          </button>
          <div>{numLikes3} people love this</div>
        </div>
      </div>
    </div>
    </div>
  );
  

    

}

export default App;
      

