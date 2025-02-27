import { useEffect, useState } from 'react'

import { Test } from '@type/index.ts'

export const useFilteredData = (data: Test[], filter: string) => {
  const [filteredData, setFilteredData] = useState<Test[]>(data)

  useEffect(() => {
    const filtered = data.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
    setFilteredData(filtered)
  }, [filter, data])

  return filteredData
}
