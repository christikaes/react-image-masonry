[![NPM](https://nodei.co/npm/react-image-masonry.png)](https://npmjs.org/package/react-image-masonry)

# React Image Masonry

Generate image masonry easily with this react component! Detailed docs and demo here: https://christinakayastha.github.io/react-image-masonry/

## Getting Started

Have you ever needed to quickly spin up a simple image gallery with masonry tiling in react? You've come to the right place :D

React Image Masonry is a simple react component that lets you add a gallery of images to your app. It's super light-weight and requires no external dependencies! Have fun using it and feel free to contribute on Github (:

## Installation

You can download the package from npm with:

`npm install react-image-masonry --save`

## Usage Simple

To use simply import the component, and specify an array of imageUrls and number of columns

```
<ImageMasonry
    imageUrls={[
        'https://media.giphy.com/media/8Ry7iAVwKBQpG/giphy.gif',
        'https://media.giphy.com/media/KI9oNS4JBemyI/giphy.gif',
        ...]}
    numCols={3}
/>
```

## Usage Advanced

You can also pass in an array of components, containerWidth, containerHeight, scroll and animate like this:
```
<ImageMasonry
    numCols={3}
    containerWidth={"600px"}
    animate={true}
    scrollable={true}
    containerHeight={"400px"}
    className="my-class"
    forceOrder={true}
>
    {images}
<ImageMasonry>
```

## Demo
https://christinakayastha.github.io/react-image-masonry/

## Contributing

Contributions are welcome on github!! https://github.com/christinakayastha/react-image-masonry
