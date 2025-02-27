import { useEffect, useState } from 'react'

import { Table } from '@components/Table/Table.tsx'
import { Test } from '@type/index.ts'

import { fetchABTests } from '../../api/abTestsApi.ts'

export const Dashboard = () => {
  const [abTests, setABTests] = useState<Test[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchABTests()
      setABTests(data)
    }
    fetchData()
  }, [])

  return (
    <div className="dashboard">
      <h1>A/B Test Dashboard</h1>
      <Table data={abTests} />
    </div>
  )
}
