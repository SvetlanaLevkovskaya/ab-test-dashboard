import { useEffect, useState } from 'react'

import { Table } from '@components/Table/Table.tsx'
import { Spinner } from '@components/ui/Spinner/Spinner.tsx'

import { fetchABTests } from '../../api/abTestsApi.ts'
import { Test } from '../../types'

export const DashboardPage = () => {
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

  return (
    <>
      <h1>Dashboard</h1>
      {isLoading ? <Spinner /> : <Table data={abTests} />}
    </>
  )
}
