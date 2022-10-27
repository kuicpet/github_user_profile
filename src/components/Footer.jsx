import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <Container>
      <small>
        Made with <span className='heart'>❤</span> by{' '}
        <a href='https://github.com/kuicpet' target='_blank' rel='noreferrer'>
          Kingsley Umujeyan
        </a>{' '}
        &copy; {date}
      </small>
    </Container>
  )
}

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem;
  small {
    .heart {
      color: red;
    }
  }
`
export default Footer
