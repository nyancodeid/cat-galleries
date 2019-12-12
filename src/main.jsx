import './assets/css/style.scss'

import { h, render } from 'preact'
import { Galleries } from './components/galleries'

render(<Galleries />, document.getElementById('galleries'))