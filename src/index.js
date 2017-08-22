import React from 'react';

// Simple Masonry component for images
// Expects props:
//      imageUrls: array of image urls--this overrides any children passed in
//      children: an array of children to render as tiles
//      [required] numCols: number of columns
//      containerWidth: width of mansonry component, default 100%
//      animate: whether or not to animate components fading in, default true
class ImageMasonry extends React.Component {  
  constructor(props) {
    super(props);
    
    let state = {}
    for(var i = 0; i < this.props.numCols; i++){
        state["col-" + i] = [];
    }
    this.state = state;
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.numCols){
        let newState = {}
        for(var i = 0; i < nextProps.numCols; i++){
            newState["col-" + i] = [];
        }
        this.setState(newState);
        this.addTiles();
      }
  }
  
  render() {
    // Create all of the columns
    let columns = []
    for(var i = 0; i < this.props.numCols; i++){
      columns.push(
        <div 
          style={{
            width: (100/this.props.numCols) + "%",
            display: "flex",
            flexDirection: "column",
            float: "left"
          }}
          className="react-image-masonry-col"
          key={"col-" + i}
        >{Object.values(this.state["col-" + i])}</div>
      )
    }
    
    const styles = `
      .react-image-masonry-col * { width: 100%}
      @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
    `;

    // Set the container width ( default to 100% )
    const containerWidth = this.props.hasOwnProperty('containerWidth') ? this.props.containerWidth : '100%';

    return (
      <div 
        ref="container" 
        style={{
          width: containerWidth,
          overflow: "hidden",
          margin: "auto"
        }}>
        <style>{styles}</style>
        {columns}
      </div>
    )
  }
  
  componentDidMount() {
    this.addTiles()
  }
    // Expects react Element
    // Returns an array of all the image urls
    getAllImageUrls(reactEl) {
        // If the element is an image, return the src
        if(reactEl.type === "img") {
            return [reactEl.props.src];
        }

        // Otherwise, if the element has children, get the imgUrls from them
        let children = reactEl.props.children;
        if(children) {
            let imageUrls = [];
            React.Children.forEach(children, child => {
                imageUrls = imageUrls.concat(this.getAllImageUrls(child))
            })
            return imageUrls;
        }

        // There were no images
        return [];
    }

    // Expects an array of imageUrls
    // Returns a promise that resolves when all of the images are loaded
    loadImages(imageUrls) {
        const imagesLoaded = [];
        imageUrls.forEach(src => {
            imagesLoaded.push(new Promise((resolve, reject) => {
                let image = new Image();
                image.onload = resolve;
                image.onerror = reject;
                image.src= src
            }))
        });
        return Promise.all(imagesLoaded);
    }

    getShortestCol(containerEl) {
        const cols = containerEl.querySelectorAll(".react-image-masonry-col");

        // Get the shortestColumn
        let shortestCol = 0;
        cols.forEach((column, index) => {
          if(column.offsetHeight < cols[shortestCol].offsetHeight) {
            shortestCol = index
          }
        });
        
        return shortestCol;
    }

    addTiles() {
      let tiles=[];
      if(this.props.imageUrls) {
        // If imgUrls is defined, generate img tags
        tiles=this.props.imageUrls.map((imageUrl, index) => {
          return <img  src={imageUrl} alt={imageUrl} key={"img-" + index + Date.now()} />
        })
      } else if(this.props.children) {
        // Otherwise use the children components
        tiles = this.props.children
      } else {
        // imgUrls or children must be passed in
        console.warn("No images were passed into react-image-masonry")
      }
    
      // For each tileComponent, get all of the images and load them
      tiles.forEach((tile, index) => {
          
          // If animation is turned on add the style (on by default)
          let animationOn = this.props.hasOwnProperty('animate') ? this.props.animate : true;
          if(animationOn) {
              tile = React.cloneElement(tile, {
                style: Object.assign({}, tile.props.style, {
                  animation: "fadeIn 1s ease-in"
                })
              });
          }
      
          // Once all of the images have been loaded, then add the tile to the shortest column
          const imageUrls = this.getAllImageUrls(tile)
          this.loadImages(imageUrls).then(() => {
              const containerEl = this.refs.container;
              const shortestCol = this.getShortestCol(containerEl)

              // Add the element to the column
              this.setState({
                  ["col-"+shortestCol] : this.state["col-"+shortestCol].concat([tile])
              })
          }).catch(error => {
              console.log(error.message)
          });
      })
    }
}

export default ImageMasonry;