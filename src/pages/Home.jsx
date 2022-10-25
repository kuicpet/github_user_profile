import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <Container>
      <div className='profile'></div>
      <div className='repos'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  )
}

export const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  min-height: 80vh;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    height: auto;
  }
  .profile {
    width: 30%;
    border: 2px solid black;
    margin: 1rem;
    border-radius: 8px;
    @media screen and (max-width: 768px) {
      width: 95%;
      height: 15rem;
    }
    @media screen and (max-width: 400px) {
      width: 90% ;
    }
  }
  .repos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 70%;
    border: 2px solid black;
    margin: 1rem;
    border-radius: 8px;
    @media screen and (max-width: 768px) {
      width: 95%;
      grid-template-columns: repeat(1, 1fr);
    }
    @media screen and (max-width: 400px) {
      width: 90% ;
    }
    div {
      border: 2px solid black;
      margin: 1rem;
      border-radius: 7px;
      @media screen and (max-width: 768px) {
        height: 10rem;
      }
    }
  }
`
export default Home
