import React from 'react'
import { gql, useQuery } from '@apollo/client'

const GET_MOVIES = gql`
  query {
    movies {
      id
      medium_cover_image
    }
  }
`

const Home = () => {
  const { loading, data, error } = useQuery(GET_MOVIES)
  console.log(loading, data, error)
  if (loading) {
    return <span>loading...</span>
  } else if (data && data.movies) {
    return data.movies.map((movie) => <h1>{movie.id}</h1>)
  }
}

export default Home
