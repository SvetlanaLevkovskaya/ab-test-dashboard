import { MouseEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Test } from '@type/index.ts'

import s from './Table.module.scss'

interface TableProps {
  data: Test[]
}

enum Status {
  DRAFT = 'DRAFT',
  ONLINE = 'ONLINE',
  PAUSED = 'PAUSED',
  STOPPED = 'STOPPED',
}

const statusOrderAsc = [Status.ONLINE, Status.PAUSED, Status.STOPPED, Status.DRAFT]
const statusOrderDesc = [Status.DRAFT, Status.STOPPED, Status.PAUSED, Status.ONLINE]

export const TableExample = ({ data }: TableProps) => {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('')
  const [tableData, setTableData] = useState<Test[]>(data)
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(
    null
  )
  useEffect(() => {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    )
    setTableData(filteredData)
  }, [filter, data])

  const handleRowClick = (testId: number) => {
    navigate(`/results/${testId}`)
  }

  useEffect(() => {
    if (sortConfig !== null) {
      const sortedData = [...tableData].sort((a, b) => {
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
      setTableData(sortedData)
    }
  }, [sortConfig])

  const handleButtonClick = (e: MouseEvent, testId: number, status: Status) => {
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
