import React from 'react'
import { useParams } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`

const Detail = () => {
  const { id } = useParams()
  const { loading, data, error } = useQuery(GET_MOVIE, {
    variables: { id: id },
  })
  if (loading) {
    return 'loding...'
  }
  if (data && data.movie) {
    return data.movie.title
  }
}

export default Detail
