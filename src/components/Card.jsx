import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { GoRepo } from 'react-icons/go'
import { Link } from 'react-router-dom'

const Card = ({ repoId, name, description, created_at }) => {
  return (
    <Link to={`/repos/${repoId}`} className='link'>
      <Container>
        <span>
          <GoRepo />
          <h5>{name}</h5>
        </span>
        <p className='desc'>
          {description
            ? description.length < 150
              ? description
              : `${description.substring(0, 120)}...`
            : 'No description'}
          </p>

        <small>Created : {moment(created_at).fromNow()}</small>
      </Container>
    </Link>
  )
}

export const Container = styled.div`
  position: relative;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease-in-out;
  border: 2px solid #47474e;
  height: 12rem;
  padding: 0.5rem;
  color: black;
  z-index: 100 ;
  //background-color: #3f3f46 ;

  span {
    display: flex;
    align-items: center;
    svg {
      color: red;
      font-size: 1.25rem;
    }
  }
  h5 {
    text-transform: uppercase;
    margin-left: 0.5rem;
  }
  p {
    margin: 0.125rem 0;
    font-weight: 200;
  }
  .lang {
    text-align: center;
    color: purple;
    border: 1px solid purple;
    width: 50%;
    padding: 0.015rem;
    border-radius: 10px;
    margin: 0.5rem 0;
  }
  .desc {
    margin-top: 1rem;
  }
  small {
    position: absolute;
    bottom: 0.5rem;
    right: 10px;
  }
`
export default Card
