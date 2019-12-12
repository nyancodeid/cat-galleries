import { h, Component } from 'preact'

export class ImageLazy extends Component {
  constructor () {
    super();
    this.state = {
      src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      dataSrc: false,
      loaded: false
    }
  }

  inview (entries, observer) {
    entries.forEach(entry => {
      if(entry.intersectionRatio){
        entry.target.addEventListener('load', this.loading.bind(this));
        entry.target.src = entry.target.getAttribute("data-src");
        observer.unobserve(entry.target);
      }
    })
  }

  loading (event) {
    if(event.target.complete) this.setState({
      loaded: true
    });
  }

  componentDidMount () {
    this.setState({
      dataSrc: this.props.gallery.url,
      loaded: false
    });

    const observer = new IntersectionObserver(this.inview.bind(this));

    observer.observe(this.element);
  }

  render () {
    return <img
      width={this.props.gallery.width}
      height={this.props.gallery.height}
      src={this.state.src}
      data-src={this.state.dataSrc}
      ref={element => this.element = element} />
  }
}