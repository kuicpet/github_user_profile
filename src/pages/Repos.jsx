import React from 'react'
//import { Outlet, Link } from 'react-router-dom'
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
        <div className='title'>
          <h3>Public Repositories</h3>
        </div>
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
  flex-direction: column;
  min-height: 80vh;
  .title {
    display: flex ;
    align-items: center ;
    justify-content: center ;
    width: 40% ;
    border: 2px solid black ;
    height: 2.5rem;
    margin: 1rem auto ;
    border-radius: 10px ;
    background-color: orange ;
    @media screen and (max-width: 768px) {
      width: 90% ;
    }
  }
`
export default Repos
