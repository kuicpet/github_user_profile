import { useState, useEffect } from 'react'

export const useApiFetch = () => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    try {
      setLoading(true)
      const fetchRepos = async () => {
        await fetch(`https://api.github.com/users/kuicpet/repos`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setRepos(data)
          })
      }
      fetchRepos()
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }, [])

  return { repos, loading }
}
