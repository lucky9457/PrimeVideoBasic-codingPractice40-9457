// Write your code here
import {Component} from 'react'

import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
    const comedyMOvies = moviesList.filter(each => each.categoryId === 'COMEDY')

    return (
      <div className="mainPrime">
        <div className="bottomContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
            alt="prime video"
            className="primevideoImage"
          />

          <div className="actionMovies">
            <h1 className="headingAction">Action Movies</h1>
            <MoviesSlider moviesList={actionMovies} />
            <h1 className="headingAction">Comedy Movies</h1>
            <MoviesSlider moviesList={comedyMOvies} />
          </div>
        </div>
      </div>
    )
  }
}
export default PrimeVideo
