import { useEffect, useState } from "react"

const useFetch = (url: string) => {
  const [fetchData, setFetchData] = useState<Array<any>>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<unknown>(null)

  const requestOptions = {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_STRAPI_DEV_TOKEN}`,
    },
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(url, requestOptions)
        const data = await response.json()
        console.log({ data })
        setFetchData(data.data)
      } catch (error: unknown) {
        setError(error)
      }

      setLoading(false)
    }

    fetchData()
  }, [url])

  return { fetchData, loading, error }
}

export default useFetch
