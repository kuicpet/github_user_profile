import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { DiGithubAlt } from 'react-icons/di'

const Header = () => {
  return (
    <Container>
      <div>
        <NavLink to='/'>
          <DiGithubAlt />
        </NavLink>
      </div>
      <ul>
        <li>
          <NavLink
            to={`/repositories`}
            style={({ isActive }) => ({
              color: isActive ? 'black' : 'gray',
            })}>
            Repositories
          </NavLink>
        </li>
      </ul>
    </Container>
  )
}

export const Container = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 1rem;
  border-bottom: 2px solid black;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin: 0 1rem;
    a {
      font-size: 2.25rem;
      color: purple;
    }
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 25%;
    font-size: 1rem;
    font-weight: 400;
    list-style: none;
    @media screen and (max-width: 768px) {
      width: 20%;
    }
    @media screen and (max-width: 400px) {
      width: 100%;
    }
    li {
      a {
        text-decoration: none;
        :hover {
          color: black;
        }
      }
      @media screen and (max-width: 400px) {
        display: none;
      }
    }
  }
`
export default Header
