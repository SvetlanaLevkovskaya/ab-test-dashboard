import { useEffect, useState } from 'react'

import { fetchABTests } from '@api/abTestsApi.ts'

import { Test } from '../types'

export const useFetchABTests = () => {
  const [abTests, setABTests] = useState<Test[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const data = await fetchABTests()
      setABTests(data)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return { abTests, isLoading }
}
