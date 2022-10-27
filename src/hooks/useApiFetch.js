import { useState, useEffect } from 'react'

const token = `${process.env.REACT_APP_API_TOKEN}`
//console.log(token)
export const useApiFetch = () => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true)
        await fetch(`https://api.github.com/users/kuicpet/repos`, {
          headers: {
            auth: `${token}`,
            'Content-Type': 'application/json',
          },
        })
          .then((res) => res.json())
          .then((data) => {
            //console.log(data)
            setRepos(data)
            setLoading(false)
          })
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    fetchRepos()
  }, [])

  return { repos, loading }
}
