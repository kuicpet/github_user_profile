import { useState, useEffect } from 'react'

const useApiFetch = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    try {
      const fetchRepos = async () => {
        await fetch(`https://api.github.com/users/kuicpet/repos`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
          })
      }
      fetchRepos()
    } catch (error) {
      console.log(error)
    }
  }, [])
}

export default useApiFetch
