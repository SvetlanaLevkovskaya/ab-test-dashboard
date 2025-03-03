import { useEffect, useState } from 'react'

import { fetchABTests } from '@api/abTestsApi.ts'
import { customToastError } from '@components/ui/CustomToast/CustomToast.tsx'

import { Test } from '../types'

export const useFetchABTests = () => {
  const [abTests, setABTests] = useState<Test[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const data = await fetchABTests()
      setABTests(data)
      setError(null)
    } catch (err: unknown) {
      if (err instanceof Error) {
        customToastError(err.message)
        setError(err.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { abTests, isLoading, error }
}
