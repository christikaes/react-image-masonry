import React, { Component } from 'react';
import './App.css';
import ImageMasonry from 'react-image-masonry';

class App extends Component {
  render() {
    // Get an array of images  
    let images = [];
    for(let i = 0; i< 1000; i++) {
      const ih = 200 + Math.floor(Math.random()*10)*15;
      const iw = 200 + Math.floor(Math.random()*10)*15;
      const color = Math.floor(Math.random()*16777215).toString(16);
      // images.push("https://unsplash.it/" + iw + "/" + ih + "/?random?sig=" + i);
      images.push("https://dummyimage.com/" + ih + "x" + iw + "/" + color + "/fff&text=" + (i+1));
    }

    return (
      <div className="App">
        <div className="header">
          <h1>React Image Masonry</h1>
          <h2>Generate image masonry easily with this react component!</h2>
        </div>
        <div>

        </div>
        <ImageMasonry 
          images={images}
          numCols={4}
          containerWidth={"100%"}
        />
      </div>
    );
  }
}

export default App;
