import { MouseEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useFilteredData } from '@hooks/useFilteredData.ts'
import { useSortedData } from '@hooks/useSortedData.ts'
import { Test } from '@type/index.ts'

import s from './Table.module.scss'

interface Props {
  data: Test[]
}

enum Status {
  DRAFT = 'DRAFT',
  ONLINE = 'ONLINE',
  PAUSED = 'PAUSED',
  STOPPED = 'STOPPED',
}

export const Table = ({ data }: Props) => {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('')
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(
    null
  )

  const filteredData = useFilteredData(data, filter)
  const tableData = useSortedData(filteredData, sortConfig)

  const handleRowClick = (testId: number) => {
    navigate(`/results/${testId}`)
  }

  const handleButtonClick = (e: MouseEvent, testId: number, status: string) => {
    e.stopPropagation()

    if (status === Status.DRAFT) {
      navigate(`/finalize/${testId}`)
    } else {
      navigate(`/results/${testId}`)
    }
  }

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
        placeholder="Filter by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>Name</th>
            <th onClick={() => handleSort('type')}>Type</th>
            <th onClick={() => handleSort('status')}>Status</th>
            <th onClick={() => handleSort('site')}>Site</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableData.length ? (
            tableData.map((item) => (
              <tr key={item.id} onClick={() => handleRowClick(item.id)} className="table-row">
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.status}</td>
                <td>{item.site?.url.replace(/^https?:\/\//, '').replace(/^www\./, '')}</td>
                <td>
                  <button onClick={(e) => handleButtonClick(e, item.id, item.status)}>
                    {item.status === Status.DRAFT ? 'Finalize' : 'Results'}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>No records found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
