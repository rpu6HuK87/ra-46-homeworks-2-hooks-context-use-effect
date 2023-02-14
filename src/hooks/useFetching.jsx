import {useState, useEffect} from 'react'

export default function useFetching(url) {
  const [data, setData] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [hasError, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const json = await response.json()
        setData(json)
        setError(null)
      } catch (e) {
        setError(e)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return [data, isLoading, hasError]
}
