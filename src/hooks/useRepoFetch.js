import { useState, useEffect } from 'react'

export const useRepoFetch = (repoId) => {
  const [repo, setRepo] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        setLoading(true)
        await fetch(`https://api.github.com/repos/kuicpet/${repoId}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setRepo(data)
            setLoading(false)
          })
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    fetchRepo()
  }, [repoId])

  return {repo, loading}
}
