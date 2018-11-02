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
    for (var i = 0; i < this.props.numCols; i++) {
      state["col-" + i] = [];
    }
    this.state = state;

    this.cancel = function () { console.log("Cancelation not set yet") }
  }

  render() {
    // Create all of the columns
    let columns = []
    for (var i = 0; i < this.props.numCols; i++) {
      columns.push(
        <div
          style={{
            width: (100 / this.props.numCols) + "%",
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
      .react-image-masonry-col * { width: 100%; box-sizing: border-box; }
      @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
    `;

    // Set the container width ( default to 100% )
    const containerWidth = this.props.hasOwnProperty('containerWidth') ? this.props.containerWidth : '100%';
    // Set the container height, if it is scrollable and no height was given, default to 500px
    const containerHeight = this.props.hasOwnProperty('containerHeight') ? this.props.containerHeight : (this.props.scrollable ? '500px' : 'auto');
    const overflowY = this.props.scrollable ? "scroll" : "hidden"

    return (
      <div
        ref="container"
        style={{
          width: containerWidth,
          height: containerHeight,
          overflowX: "hidden",
          overflowY: overflowY,
          margin: "auto"
        }}
        className={this.props.className}>
        <style>{styles}</style>
        {columns}
      </div>
    )
  }

  componentDidMount() {
    // Get tiles based on props
    const tiles = this.getTiles(this.props);
    // Add tiles to state
    this.addTiles(tiles);
  }

  componentWillReceiveProps(nextProps) {
    try {
      // If any of these props changed, recalculate the tiles
      if (nextProps.numCols !== this.props.numCols
        || !this.areArraysEqual(nextProps.imageUrls, this.props.imageUrls)
        || (nextProps.children || []).length !== (this.props.children || []).length
        || !(nextProps.children || []).every((child, i) => { return nextProps.children[i].key === this.props.children[i].key })
      ) {

        // Reset the state
        let newState = {}
        for (var i = 0; i < nextProps.numCols; i++) {
          newState["col-" + i] = [];
        }
        this.setState(newState);

        // Cancel any images that were loading
        this.cancel();

        // Get tiles based on props
        const tiles = this.getTiles(nextProps);
        // Add tiles to state
        this.addTiles(tiles);
      }
    } catch (error) {
      console.warn(error.message);
    }
  }

  areArraysEqual(array1, array2) {
    // Note: This only works on scalar arrays
    return array1.length === array2.length && array1.sort().every(function (value, index) { return value === array2.sort()[index] });
  }

  // Gets tiles based on the props passed in
  getTiles(props) {
    let tiles = [];
    if (props.imageUrls) {
      // If imageUrls is defined, generate img tags
      tiles = props.imageUrls.map((imageUrl, index) => {
        return <img
          src={imageUrl}
          alt={imageUrl}
          key={"img-" + index + Date.now()}
          style={{
            border: "2px solid transparent",
            boxSizing: "border-box"
          }}
        />
      })
    } else if (props.children) {
      // Otherwise use the children components
      tiles = props.children
    } else {
      // imageUrls or children must be passed in
      console.warn("No images were passed into react-image-masonry")
    }

    return tiles;
  }

  // Expects react Element
  // Returns an array of all the image urls
  getAllImageUrls(reactEl) {
    if (!reactEl) {
      return [];
    }

    // If the element is an image, return the src
    if (reactEl.type === "img") {
      return [reactEl.props.src];
    }

    // Otherwise, if the element has children, get the imageUrls from them
    let children = reactEl.props ? reactEl.props.children : false;
    if (children) {
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
        image.src = src
        this.cancel = function () {
          image.src = ""
        }
      }))
    });
    return Promise.all(imagesLoaded);
  }

  // Returns the index of the shortest column
  getShortestCol(containerEl) {
    const cols = containerEl.querySelectorAll(".react-image-masonry-col");

    // Get the shortestColumn
    let shortestCol = 0;
    cols.forEach((column, index) => {
      if (column.offsetHeight < cols[shortestCol].offsetHeight) {
        shortestCol = index
      }
    });

    return shortestCol;
  }

  // Adds the given tiles to the state
  addTiles(tiles) {
    // For each tileComponent, get all of the images and load them
    tiles.forEach((tile, index) => {
      if (!tile) {
        return;
      }

      let style = {};

      // If animation is turned on add the style (on by default)
      let animate = this.props.hasOwnProperty('animate') ? this.props.animate : true;
      if (animate) {
        style.animation = "fadeIn 1s ease-in"
      }

      // If forceOrder is turned on maintain the order of the tiles
      if (this.props.forceOrder) {
        style.order = index;
      }

      // Copy over any styles that were set on the tile
      if (tile && tile.props && tile.props.style) {
        style = Object.assign({}, tile.props.style, style)
      }
      tile = React.cloneElement(tile, { style });

      // Once all of the images have been loaded, then add the tile to the shortest column
      const imageUrls = this.getAllImageUrls(tile)
      this.loadImages(imageUrls).then(() => {
        const containerEl = this.refs.container;
        if (!containerEl) {
          return;
        }

        const shortestCol = this.getShortestCol(containerEl)

        // Add the element to the column
        this.setState({
          ["col-" + shortestCol]: this.state["col-" + shortestCol].concat([tile])
        })
      }).catch(error => {
        console.error(error)
      });
    })
  }
}

export default ImageMasonry;
