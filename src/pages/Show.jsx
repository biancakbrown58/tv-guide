import React, { useState, useEffect } from 'react'
import Home from '../components/Home'
import axios from 'axios'

// import React from 'react'

const Show = (props) => {
  const [showDetails, setShowDetails] = useState([])
  const [cast, setCast] = useState([])
  const showId = props.match.params.id

  const getShowDetails = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${showId}?api_key=7592f99d86a9cd53c9c7dbd963be4de3&language=en-US&page=1`
    )
    console.log(resp.data)
    setShowDetails(resp.data)
  }
  const getCast = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${showId}/credits?api_key=7592f99d86a9cd53c9c7dbd963be4de3&language=en-US`
    )
    console.log(resp.data)
    setCast(resp.data.cast)
  }
  useEffect(() => {
    getShowDetails()
    getCast()
  }, [])
  return (
    <section>
      <section>
        <h1>{showDetails.name}</h1>
        <img src={`http://image.tmdb.org/t/p/w154${showDetails.poster_path}`} />
      </section>
      <section>
        <h3>Overview</h3>
        <p>{showDetails.overview}</p>
      </section>
      <section>
        <h3>Cast</h3>
        <ul>
          {cast.map((actor) => {
            return (
              <li>
                {actor.character} - {actor.name}
              </li>
            )
          })}
        </ul>
      </section>
    </section>
  )
}

export default Show
