import { useEffect, useState } from 'react'

import { Test } from '@type/index.ts'

enum Status {
  DRAFT = 'DRAFT',
  ONLINE = 'ONLINE',
  PAUSED = 'PAUSED',
  STOPPED = 'STOPPED',
}

const statusOrderAsc = [Status.ONLINE, Status.PAUSED, Status.STOPPED, Status.DRAFT]
const statusOrderDesc = [Status.DRAFT, Status.STOPPED, Status.PAUSED, Status.ONLINE]

export const useSortedData = (
  data: Test[],
  sortConfig: { key: string; direction: 'asc' | 'desc' } | null
) => {
  const [sortedData, setSortedData] = useState<Test[]>(data)

  console.log('data', data)

  useEffect(() => {
    if (sortConfig !== null) {
      const sortedData = [...data].sort((a, b) => {
        if (sortConfig.key === 'status') {
          // Сортировка по статусу
          const indexA =
            sortConfig.direction === 'asc'
              ? statusOrderAsc.indexOf(a.status)
              : statusOrderDesc.indexOf(a.status)
          const indexB =
            sortConfig.direction === 'asc'
              ? statusOrderAsc.indexOf(b.status)
              : statusOrderDesc.indexOf(b.status)

          return indexA - indexB
        }

        let aValue = a[sortConfig.key as keyof Test]?.toString() || ''
        let bValue = b[sortConfig.key as keyof Test]?.toString() || ''

        if (sortConfig.key === 'site') {
          aValue = a.site?.url || ''
          bValue = b.site?.url || ''
        }

        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1
        }
        return 0
      })
      setSortedData(sortedData)
    } else {
      setSortedData(data)
    }
  }, [sortConfig, data])

  console.log('sortedData', sortedData)

  return sortedData
}
