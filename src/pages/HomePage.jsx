import React, { useState, useEffect } from 'react'
import HelloWorld from '../components/HelloWorld'
import Home from '../components/Home'
import axios from 'axios'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const [shows, setShows] = useState([])
  const [feature, setFeature] = useState([])

  const getAllShows = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=7592f99d86a9cd53c9c7dbd963be4de3&language=en-US&page=1'
    )
    console.log(resp.results)
    setShows(resp.data.results)

    const randomShow = Math.floor(Math.random() * 20)
    setFeature(resp.data.results[randomShow])
  }

  useEffect(() => {
    console.log('anything?')
    getAllShows()
  }, [])

  return (
    <>
      <section className="top-show">
        <h1>Top rated show</h1>
        <Link to={`/tv/${feature.id}`}>
          <section>
            <img src={`http://image.tmdb.org/t/p/w154${feature.poster_path}`} />
            <p>{feature.name}</p>
          </section>
        </Link>
      </section>

      <ul>
        {/* <li>
          <Link to={`${Home}/${feature.id}`} />
          <Home featured={feature.name} />
        </li> */}
        <li>
          {shows.map((show) => {
            return (
              <Home
                key={show.id}
                id={show.id}
                name={show.name}
                poster={show.poster_path}
              />
            )
          })}
        </li>
      </ul>
    </>
  )
}

export default HomePage
