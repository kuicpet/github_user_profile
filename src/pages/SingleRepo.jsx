import React from 'react'
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'
import { useRepoFetch } from '../hooks/useRepoFetch'
import { BreadCrumb, Loader, Meta } from '../components'

const SingleRepo = () => {
  const { repoId } = useParams()
  const { repo, loading } = useRepoFetch(repoId)
  return (
    <>
      <Meta title={`${repoId}`} />
      <Container>
        <BreadCrumb repoName={repoId} />
        
        {loading && <Loader />}
      </Container>
    </>
  )
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  //align-items: center ;
  justify-content: center;
  min-height: 80vh;
`
export default SingleRepo
