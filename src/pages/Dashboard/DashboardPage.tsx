import { Table } from '@components/Table/Table.tsx'
import { Spinner } from '@components/ui/Spinner/Spinner.tsx'
import { useFetchABTests } from '@hooks/useFetchABTests.ts'

export const DashboardPage = () => {
  const { abTests, isLoading, error } = useFetchABTests()

  if (error) return null

  return (
    <>
      <h1>Dashboard</h1>
      {isLoading ? <Spinner /> : <Table data={abTests} />}
    </>
  )
}
