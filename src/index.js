import React from 'react';

// Simple Masonry component for images
// Expects props:
//      images: array of image urls
//      numCols: number of columns
//      containerWidth: width of mansonry component
class ImageMasonry extends React.Component {  
  render() {
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
          className="col"
        ></div>
      )
    }
    
    return (
      <div 
        ref="container" 
        style={{
          width: this.props.containerWidth,
          overflow: "hidden",
          margin: "auto"
        }}>
        {columns}
      </div>
    )
  }
  
  componentDidMount() {
    console.log(this.refs.container)
    const containerEl = this.refs.container;
    const cols = containerEl.querySelectorAll(".col");
    const startTime = Date.now();
    this.props.images.forEach((imageUrl, i) => {
      var img = new Image();
      img.onload = () => {
        let shortestColumn = cols[0];
        cols.forEach((column) => {
          if(column.offsetHeight < shortestColumn.offsetHeight) {
            shortestColumn = column
          }
        });
        shortestColumn.append(img);

        // If the image loaded too quickly, add an animation delay
        // var animationDelay = (Date.now() - startTime > 100*i) ? 0 : 100*i; 
        setTimeout(() => {
          img.style.opacity = 1;
        }, 50)
      }
      img.src = imageUrl;
      img.style.width = "100%";
      img.style.border = "2px solid transparent";
      img.style.boxSizing= "border-box";
      img.style.transition = "opacity 1s";
      img.style.opacity = 0;
    })
  }
}

export default ImageMasonry;