import { useState, useEffect } from 'react'

const token =
  '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'
export const useApiFetch = () => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true)
        await fetch(`https://api.github.com/users/kuicpet/repos`, {
          headers: {
            Authorization: `bearer ${token}`,
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
