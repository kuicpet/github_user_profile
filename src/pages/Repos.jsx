import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Loader, Meta } from '../components'
import Card from '../components/Card'
import Grid from '../components/Grid'
import { useApiFetch } from '../hooks/useApiFetch'

const Repos = () => {
  const { repos, loading } = useApiFetch()
  return (
    <>
      <Meta
        title='Repositories'
        description='A list of public respositories for kuicpet'
      />
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <Grid>
            {repos && repos.length > 0 ? (
              repos.map((repo, i) => (
                <Card
                  key={i}
                  repoId={repo.name}
                  name={repo.name}
                  description={repo.description}
                  language={repo.language}
                  created_at={repo.created_at}
                />
              ))
            ) : (
              <h2>No Repositories Found</h2>
            )}
          </Grid>
        )}
      </Container>
    </>
  )
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 80vh;
  //background-color: #272728 ;
`
export default Repos
