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
        <div className="App-header">
          <h2>React Image Masonry</h2>
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
