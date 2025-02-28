import { useState } from 'react'

import { useFilteredData } from '@hooks/useFilteredData.ts'
import { useSortedData } from '@hooks/useSortedData.ts'

import s from './Table.module.scss'

import { Test } from '../../types'

import { TableEmptyState } from './TableEmptyState/TableEmptyState.tsx'
import { TableHeader } from './TableHeader/TableHeader.tsx'
import { TableRow } from './TableRow/TableRow.tsx'

interface Props {
  data: Test[]
}

export const Table = ({ data }: Props) => {
  const [filter, setFilter] = useState('')
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(
    null
  )

  const filteredData = useFilteredData(data, filter)
  const tableData = useSortedData(filteredData, sortConfig)

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  return (
    <div className={s.tableContainer}>
      <input
        type="text"
        placeholder="What test are you looking for?"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {tableData.length > 0 && (
        <table>
          <TableHeader onSort={handleSort} sortConfig={sortConfig} />
          <tbody>
            {tableData.map((item, index) => (
              <TableRow key={item.id} item={item} index={index} />
            ))}
          </tbody>
        </table>
      )}

      {!tableData.length && <TableEmptyState onReset={() => setFilter('')} />}
    </div>
  )
}
