import React from 'react'
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'
import { useRepoFetch } from '../hooks/useRepoFetch'
import { Loader, Meta } from '../components'

const SingleRepo = () => {
  const { repoId } = useParams()
  const { repo, loading } = useRepoFetch(repoId)
  return (
    <>
    <Meta title={`${repoId}`} />
      <Container>
        <h2>Single Repo : {repoId}</h2>
        <Link to='/repos'>Back to repositories</Link>
        {loading && <Loader />}
      </Container>
    </>
  )
}

export const Container = styled.section``
export default SingleRepo
