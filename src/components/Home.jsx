import React from 'react'
import { Link } from 'react-router-dom'
import Show from '../pages/Show'
import HomePage from '../pages/HomePage'

const Poster = 'http://image.tmdb.org/t/p/w154'

const Home = (props) => {
  const { id, name, poster } = props
  return (
    <li>
      <Link to={`/tv/${id}`}>
        <img src={`${Poster + poster}`} />
        <p>{name}</p>
        {/* <p>{props.overview}</p> */}
      </Link>
    </li>
  )
}

export default Home
