import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'
import moment from 'moment/moment'
import { BiCodeAlt, BiCode, BiGitBranch, BiTime } from 'react-icons/bi'
import { BsTag } from 'react-icons/bs'
import { GrClone } from 'react-icons/gr'
import { VscIssues } from 'react-icons/vsc'
import { useRepoFetch } from '../hooks/useRepoFetch'
import { BreadCrumb, Loader, Meta } from '../components'

const SingleRepo = () => {
  const { repoId } = useParams()
  const { repo, loading } = useRepoFetch(repoId)
  const [langs, setLangs] = useState({})
  const [tags, setTags] = useState([])
  const [issues, setIssues] = useState([])
  const [contents, setContents] = useState([])

  const repoName = repo?.name
  const repoDesc = repo?.description
  const branch = repo?.default_branch
  const cloneRepo = repo?.clone_url
  const visibility = repo?.visibility
  const created_at = repo?.created_at
  const updated_at = repo?.updated_at

  useEffect(() => {
    const fetchLangs = async () => {
      try {
        await fetch(`https://api.github.com/repos/kuicpet/${repoId}/languages`)
          .then((res) => res.json())
          .then((data) => {
            //console.log(data)
            setLangs(data)
          })
      } catch (error) {
        console.log(error)
      }
    }
    const fetchTags = async () => {
      try {
        await fetch(`https://api.github.com/repos/kuicpet/${repoId}/tags`)
          .then((res) => res.json())
          .then((data) => {
            //console.log(data)
            setTags(data)
          })
      } catch (error) {
        console.log(error)
      }
    }
    const fetchIssues = async () => {
      try {
        await fetch(`https://api.github.com/repos/kuicpet/${repoId}/issues`)
          .then((res) => res.json())
          .then((data) => {
            //console.log(data)
            setIssues(data)
          })
      } catch (error) {
        console.log(error)
      }
    }
    const fetchContents = async () => {
      try {
        await fetch(`https://api.github.com/repos/kuicpet/${repoId}/contents`)
          .then((res) => res.json())
          .then((data) => {
            // console.log(data)
            setContents(data)
          })
      } catch (error) {
        console.log(error)
      }
    }
    fetchLangs()
    fetchTags()
    fetchIssues()
    fetchContents()
  }, [repoId])

  return (
    <>
      <Meta title={`${repoId}`} />
      {loading && <Loader />}
      <Container>
        <BreadCrumb repoName={repoId} />
        <Wrapper>
          <Content>
            <h3>repository name : {repoName}</h3>
            <p>{repoDesc ? repoDesc : 'No description'}</p>

            <div className='langs'>
              <BiCode />
              {Object.entries(langs).map(([key, text], i) => (
                <div key={i}>
                  <span>{key}</span>
                </div>
              ))}
              <BiCodeAlt />
            </div>
            <div className='details'>
              <span>
                {' '}
                <BiGitBranch />
                {branch} branch
              </span>
              {tags && tags.length > 0 ? (
                tags.map((item, i) => (
                  <span key={i}>
                    <BsTag />
                    {item ? item : 0} tags
                  </span>
                ))
              ) : (
                <span>
                  <BsTag /> 0 tags
                </span>
              )}
              {issues && issues.length > 0 ? (
                issues.map((item, i) => (
                  <span key={i}>
                    <VscIssues /> {item ? item : 0} issues
                  </span>
                ))
              ) : (
                <span>
                  <VscIssues /> 0 issues
                </span>
              )}
            </div>
            <div className='clone'>
              <a href={`${cloneRepo}`} target='_blank'>
                <GrClone />
                clone repository
              </a>
              <span className='visibility'>{visibility}</span>
            </div>
            <div className='time'>
              <span>Created : {moment(created_at).fromNow()}</span>
              <BiTime />
              <span>Updated: {moment(updated_at).fromNow()} </span>
            </div>
          </Content>
          <Details>
            <div className='header'>Header</div>
            <table>
              <thead>
                <th>File Name</th>
                <th>File Size (kB)</th>
              </thead>
              <tbody>
                {contents &&
                  contents.length > 0 &&
                  contents.map((item, i) => (
                    <tr>
                      <td>
                        <a href={`${item.html_url}`} target='_blank'>
                          {item.name}
                        </a>
                      </td>
                      <td className='size'>{item.size}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </Details>
        </Wrapper>
      </Container>
    </>
  )
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  //justify-content: center;
  min-height: 80vh;
`
export const Wrapper = styled.div`
  display: flex;

  border: 2px solid black;
  width: 90%;
  height: auto;
  margin: 1rem;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0 auto;
  }
  @media screen and (max-width: 400px) {
    height: auto;
    flex-direction: column;
  }
`

export const Content = styled.div`
  width: 50%;
  padding: 1rem;
  border: 2px solid black;
  height: auto;
  margin: 1rem;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    width: 95%;
    //height: 70%;
    margin: 0.5rem;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    height: 75%;
    margin: 0;
    border: none;
  }
  h3 {
    text-transform: capitalize;
    font-weight: 100;
    margin: 0.5rem 0;
  }
  p {
    color: gray;
  }
  .langs {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    margin-top: 2.5rem;
    border: 2px solid black;
    padding: 0.125rem 0.5rem;
    border-radius: 10px;

    svg {
      font-size: 1.5rem;
    }
    @media screen and (max-width: 400px) {
      width: 100%;
    }
    div {
      border: 2px solid black;
      background-color: #dff2ff;
      padding: 0.0125rem 1rem;
      border-radius: 6px;
      text-transform: lowercase;
    }
  }
  .details {
    display: flex;
    border: 2px solid black;
    align-items: center;
    justify-content: space-around;
    padding: 0.125rem 0.5rem;
    border-radius: 10px;
    margin: 0.75rem 0;
    @media screen and (max-width: 400px) {
      display: none;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 2px solid black;
      padding: 0.0125rem 1rem;
      border-radius: 6px;
      text-transform: lowercase;
      background-color: #e4e5ff;
    }
    svg {
      font-size: 1.2rem;
      margin: 0 0.25rem;
    }
  }
  .clone {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
    a,
    span {
      display: flex;
      text-decoration: none;
      align-items: center;
      border: 2px solid black;
      padding: 0.125rem 1rem;
      color: black;
      border-radius: 8px;
      background-color: rgb(255, 171, 76);
      left: -2px;
      top: -2px;
      z-index: 2;
      box-shadow: 2px 2px black;
      transition: 0.1s ease-in-out;
      &:hover {
        transform: translateY(2px);
        box-shadow: 0 0 0;
      }
      svg {
        margin-right: 0.5rem;
      }
    }
    .visibility {
      background-color: #caff04;
      cursor: pointer;
    }
  }
  .time {
    display: flex;

    align-items: center;
    justify-content: space-between;
    border: 2px solid black;
    padding: 0.25rem 1rem;
    border-radius: 10px;
    span {
      border: 2px solid black;
      padding: 0.015rem 1rem;
      border-radius: 6px;
      background-color: #dff2ff;
    }
    svg {
      font-size: 1.2rem;
    }
    @media screen and (max-width: 400px) {
      flex-direction:column ;
      svg {
        display: none ;
      }
      span {
        margin: 0.1rem
      }
    }
  }
`
export const Details = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  border: 2px solid black;
  height: auto;
  margin: 1rem;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    width: 95%;
    //height: 70%;
    margin: 0.5rem;
  }
  .header {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    margin: 0.25rem;
    //border: 2px solid black;
    padding: 0.125rem 0.5rem;
    height: 2rem;
  }
  table {
    width: 100%;
    text-align: justify;
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid black;
    height: auto;
    td,
    th {
      width: 50%;
      border-bottom: 2px solid black;
      padding: 0.5rem;
      a {
        display: flex;
        text-decoration: none;
        align-items: center;
        border: 2px solid black;
        padding: 0.125rem 1rem;
        color: black;
        border-radius: 8px;
        background-color: rgb(255, 171, 76);
        left: -2px;
        top: -2px;
        z-index: 2;
        box-shadow: 2px 2px black;
        transition: 0.1s ease-in-out;
        &:hover {
          transform: translateY(2px);
          box-shadow: 0 0 0;
        }
      }
    }
    th {
      border-top: 2px solid black;
    }
    .size {
      margin-right: auto;
    }
  }
`
export default SingleRepo
