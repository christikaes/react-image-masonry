import React, { Component } from 'react';
import ImageMasonry from 'react-image-masonry';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

class Demo1 extends Component {
    render() {
        // Get an array of images  
        let images = [];
        for(let i = 0; i< 1000; i++) {
            const ih = 100 + Math.floor(Math.random()*10)*15;
            const iw = 100 + Math.floor(Math.random()*10)*15;
            const color = Math.floor(Math.random()*16777215).toString(16);
            images.push("https://dummyimage.com/" + ih + "x" + iw + "/" + color + "/fff&text=" + (i+1));
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
    imageUrls={images}
    numCols={10}
    onImageClick={(event, index) => {
        alert(\`You clicked on image index \${index}!!\`);
    }}
/>
                    `}</SyntaxHighlighter>

                    <h3>Result</h3>
                </div>
                <ImageMasonry
                    imageUrls={images}
                    numCols={10}
                    onImageClick={(event, index) => {
                        alert(`You clicked on image index ${index}!!`);
                    }}
                >
                </ImageMasonry>
            </div>
        )
    }
}

export default Demo1;