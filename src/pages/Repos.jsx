import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import {useApiFetch} from '../hooks/useApiFetch'

const Repos = () => {
  const {repos, loading} = useApiFetch()
  return (
    <Container>
      <h2>Repos</h2>
      <Outlet />
    </Container>
  )
}

export const Container = styled.section`
display: flex ;
//align-items:center ;
justify-content: center;
min-height: 80vh ;
`
export default Repos