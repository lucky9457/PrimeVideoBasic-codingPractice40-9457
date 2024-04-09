// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList} = props
  const setting = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  }
  return (
    <Slider className="slder" {...setting}>
      {moviesList.map(each => (
        <MovieItem item={each} key={each.id} />
      ))}
    </Slider>
  )
}
export default MoviesSlider
