import { h, Component } from "preact"
import { ImageLazy } from "./image"

export class Galleries extends Component {

  constructor() {
    super();
    this.state = {
      galleries: []
    };
  }

  // Lifecycle: Called whenever our component is created
  componentDidMount() {
    const galleries = []
    const random = (min, max) => {
      return Math.round(Math.random() * (max - min) + min)
    }
    const cdnImage = (uri) => {
      return `https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?url=${encodeURIComponent(uri)}&container=focus&refresh=31536000&rewriteMime=image/webp`
    }

    for (let index = 0; index < 25; index++) {
      const size = { width: random(1, 6), height: random(1, 6) }
      galleries.push({
        url: cdnImage(`https://placekitten.com/2${size.width}0/3${size.height}0`),
        width: `2${size.width}0px`,
        height: `3${size.height}0px`
      })
    }

    this.setState({ galleries })
  }

  render() {
    const renderedDOM = this.state.galleries.map((gallery, index) => (
        <ImageLazy gallery={gallery} />
    ))

    return <div class='galleries-wrap'>{renderedDOM}</div>
  }
}