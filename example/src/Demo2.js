import React, { Component } from 'react';
import ImageMasonry from 'react-image-masonry';

class Demo2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numCols: 5,
            width: "50%"
        };
    }

    render() {
        // Get an array of images  
        let images = [];
        for(let i = 0; i< 1000; i++) {
            const ih = 200 + Math.floor(Math.random()*10)*15;
            const iw = 200 + Math.floor(Math.random()*10)*15;
            images.push("https://unsplash.it/" + iw + "/" + ih + "/?random?sig=" + i);
        }
    
        return(
            <div>
                <div className="content">
                    <h2>Customise the parameters</h2>
                        Number of Columns: 
                        <input 
                            className="input"
                            type="number" 
                            value={this.state.numCols} 
                            onChange={(event) => {this.setState({numCols: event.target.value})}} />
                        <div className="spacer"></div>
                        Container Width: 
                        <input 
                            className="input"
                            type="text" 
                            value={this.state.width} 
                            onChange={(event) => {this.setState({width: event.target.value})}} />
                    <h3>Result</h3>
                </div>
                <ImageMasonry
                    imageUrls={images}
                    numCols={this.state.numCols}
                    containerWidth={this.state.width}
                >
                </ImageMasonry>
            </div>
        )
    }
}

export default Demo2;