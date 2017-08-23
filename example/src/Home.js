import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
import ImageMasonry from 'react-image-masonry';

class Intro extends Component {
    render(){
        return(
            <div className="content">
                <h2>Getting Started</h2>
                    <p>
                        Have you ever needed to quickly spin up a simple image gallery with masonry tiling in react? You've come to the right place :D
                    </p>
                    <p>
                        React Image Masonry is a simple react component that lets you add a gallery of images to your app.
                        It's super light-weight and requires no external dependencies! Have fun using it and feel free to contribute on Github (:
                    </p>

                <h2>Installation</h2>
                    <p>You can download the package from npm with:</p>
                    <SyntaxHighlighter language='shell' style={docco}>
                        npm install react-image-masonry --save
                    </SyntaxHighlighter>
                
                <h2>Usage</h2>
                    <p>To use simply import the component, and specify an array of imageUrls, number of columns, and container width</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
<ImageMasonry
    imageUrls={[
        'https://media.giphy.com/media/8Ry7iAVwKBQpG/giphy.gif',
        'https://media.giphy.com/media/KI9oNS4JBemyI/giphy.gif',
        ...]}
    numCols={3}
    containerWidth={"600px"}
/>
                    `}</SyntaxHighlighter>

                    <h3>Result</h3>
                    <ImageMasonry
                            imageUrls={[
                                'https://media.giphy.com/media/8Ry7iAVwKBQpG/giphy.gif',
                                'https://media.giphy.com/media/KI9oNS4JBemyI/giphy.gif',
                                'https://media.giphy.com/media/vfy6JExK7Ryhi/giphy.gif',
                                'https://media.giphy.com/media/13FBIII8M4IDDi/giphy.gif',
                                'https://media.giphy.com/media/pO4UHglOY2vII/giphy.gif',
                                'https://media.giphy.com/media/Ue55CpP8r1lAc/giphy.gif',
                                'https://media.giphy.com/media/13p77tfexyLtx6/giphy.gif',
                                'https://media.giphy.com/media/4CFjzDix8jacE/giphy.gif',
                                'https://media.giphy.com/media/L2UdIWuCRbUL6/giphy.gif']}
                            numCols={3}
                            containerWidth={"600px"}
                        />

                <h2>Contributing</h2>
                    <p>Contributions welcome on github!! https://github.com/christinakayastha/react-image-masonry</p>
            </div>
        )
    }
}

export default Intro;