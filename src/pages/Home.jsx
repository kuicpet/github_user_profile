import React from 'react'
import styled from 'styled-components'
import photo from '../assets/kingsley_photo.jpg'
import { GrTwitter, GrLinkedinOption, GrFacebookOption } from 'react-icons/gr'
import { FaDiscord } from 'react-icons/fa'
import { FiStar } from 'react-icons/fi'
import { AiFillGithub } from 'react-icons/ai'

const Home = () => {
  return (
    <Container>
      <div className='profile'>
        <img src={photo} alt='Kingsley umujeyan' />
        <div>
          <h4>Kingsley Umujeyan</h4>
          <p>kuicpet</p>
        </div>
        <div className='socials'>
          <a
            href='https://github.com/kuicpet'
            target='_blank'
            rel='noreferrer'>
              <span className='span'>
                <AiFillGithub />
              </span>
            </a>
          <a
            href='https://twitter.com/kuicpet'
            target='_blank'
            rel='noreferrer'>
            <span className='span'>
              <GrTwitter />
            </span>
          </a>
          <a
            href='https://facebook.com/kingsleyumujeyan'
            target='_blank'
            rel='noreferrer'>
            <span className='span'>
              <GrFacebookOption />
            </span>
          </a>
          <a href='#' target='_blank' rel='noreferrer'>
            <span className='span'>
              <FaDiscord />
            </span>
          </a>
          <a
            href='https://www.linkedin.com/in/kingsley-umujeyan-17858a75/'
            target='_blank'
            rel='noreferrer'>
            <span className='span'>
              <GrLinkedinOption />
            </span>
          </a>
        </div>
        <div className='highlights'>
          <span className='span'>
            <FiStar />
            PRO
          </span>
        </div>
      </div>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 30%;
    // border: 2px solid black;
    margin: 1rem;
    border-radius: 8px;
    img {
      width: 90%;
      object-fit: cover;
      border-radius: 8px;
      border: 2px solid black;
      margin: 1rem;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 2px solid black;
      width: 90%;
      margin: 0 auto;
      padding: 0.25rem;
      text-align: center;
      border-radius: 6px;
      background-color: #cdebf3;
      h4 {
        font-weight: 600;
      }
    }
    .socials,
    .highlights {
      background-color: white;
      margin: 0.5rem auto;
      border: none;
      a {
        color: black;
      }
      .span {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 2px solid black;
        padding: 0.125rem 0.5rem;
        border-radius: 8px;
        font-weight: 100;
        font-size: 1.25rem;
        transition: all 0.1s ease-in-out;
        :hover {
          background-color: orange;
        }
      }
    }
    @media screen and (max-width: 768px) {
      width: 95%;
      height: auto;
    }
    @media screen and (max-width: 400px) {
      width: 90%;
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
      width: 90%;
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
