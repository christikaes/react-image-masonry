import React, { Component } from 'react';
import ImageMasonry from 'react-image-masonry';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

class Demo3 extends Component {
    render() {
        // Get an array of images  
        let images = [];
        for(let i = 0; i< 1000; i++) {
            const ih = 100 + Math.floor(Math.random()*10)*15;
            const iw = 100 + Math.floor(Math.random()*10)*15;
            images.push("https://unsplash.it/" + iw + "/" + ih + "/?random?sig=" + i);
        }
    
        return(
            <div>
                <div className="content">
                    <h2>Lots of content</h2>
                    <p>
                        Here's an example of the app loading lots of content. 
                        The images are populated top down, with images that finish loading faster getting priority.
                        This makes the loading seem smooth and your users are never left waiting.
                    </p>

                    <h2>Code</h2>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
<ImageMasonry
    numCols={10}
>
    {images.map((image, i) => {
        <div key={i} className="tile" onClick={() => {alert(i + ' wooo!')}}>
            <img src={image} alt={image} key={i} />
        </div>
    })}
</ImageMasonry>
                    `}</SyntaxHighlighter>

                    <h3>Result</h3>
                </div>
                <ImageMasonry
                    numCols={20}
                >
                    {images.map((image, i) => (
                        <div key={i} className="tile" onClick={() => {alert(i + ' wooo!')}}>
                            <img src={image} alt={image} />
                        </div>
                    ))}
                </ImageMasonry>
            </div>
        )
    }
}

export default Demo3;