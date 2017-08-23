import React, { Component } from 'react';
import ImageMasonry from 'react-image-masonry';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

class Demo3 extends Component {
    render() {
        // Get an array of images  
        let images = [];
        for(let i = 0; i< 100; i++) {
            const ih = 200 + Math.floor(Math.random()*10)*15;
            const iw = 200 + Math.floor(Math.random()*10)*15;
            images.push("https://unsplash.it/" + iw + "/" + ih + "/?random?sig=" + i);
        }
    
        return(
            <div>
                <div className="content">
                    <h2>Pass in Components</h2>
                    <p>
                        You can pass in your own components as well! 
                        Here's an example of a div component being passed in, but this could be anything!
                        ImageMasonry preloads all of the images inside of the component before adding it.
                    </p>

                    <h2>Code</h2>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
<ImageMasonry
    numCols={10}
>
    {images.map((image, i) => {
        <div
            key={i}
            className="tile"
            onClick={() => {alert('Poked image ' + i + '! Woo!')}}>
            <img 
                src={image} 
                alt={image} />
        </div>
    })}
</ImageMasonry>
                    `}</SyntaxHighlighter>

                    <h3>Result</h3>
                </div>
                <ImageMasonry
                    numCols={5}
                    containerWidth={'70%'}
                >
                    {images.map((image, i) => (
                        <div
                            key={i}
                            className="tile"
                            onClick={() => {alert('Poked image ' + i + '! Woo!')}}>
                            <img 
                                src={image} 
                                alt={image} />
                        </div>
                    ))}
                </ImageMasonry>
            </div>
        )
    }
}

export default Demo3;