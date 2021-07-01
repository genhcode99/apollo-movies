import React from 'react'
import { useParams } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'
import styled from 'styled-components'
import Movie from '../components/Movie'

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      language
      rating
      description_intro
      isLiked @client
    }
    suggestions(id: $id) {
      id
      medium_cover_image
    }
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Top = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`
const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`
const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`
const Description = styled.p`
  font-size: 28px;
`
const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  width: 25%;
  height: 60%;
`
const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -30px;
`

const Detail = () => {
  const { id } = useParams()
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: id },
  })
  return (
    <Container>
      <Top>
        <Column>
          <Title>
            {loading
              ? 'Loading...'
              : `${data.movie.title} ${data.movie.isLiked ? '💖' : '😩'}`}
          </Title>
          {!loading && data.movie && (
            <>
              <Subtitle>
                {data.movie.language} • {data.movie.rating}
              </Subtitle>
              <Description>{data.movie.description_intro}</Description>
            </>
          )}
        </Column>
        {!loading ? (
          <Poster bg={data?.movie?.medium_cover_image}></Poster>
        ) : null}
      </Top>
    </Container>
  )
}

export default Detail
