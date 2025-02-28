import { ArrowIcon } from '@components/Icons/ArrowIcon.tsx'
import cls from 'classnames'

import s from './TableHeader.module.scss'

interface Props {
  onSort: (key: string) => void
  sortConfig: { key: string; direction: 'asc' | 'desc' } | null
}

const columns = [
  { label: 'NAME', key: 'name' },
  { label: 'TYPE', key: 'type' },
  { label: 'STATUS', key: 'status' },
  { label: 'SITE', key: 'site' },
]

export const TableHeader = ({ onSort, sortConfig }: Props) => {
  const handleSort = (key: string) => {
    onSort(key)
  }

  return (
    <thead>
      <tr>
        {columns.map(({ label, key }) => (
          <th key={key} className={s.thClickable} onClick={() => handleSort(key)}>
            {label}
            {sortConfig?.key === key && (
              <ArrowIcon
                className={cls(s.arrowIcon, {
                  [s.asc]: sortConfig.direction === 'asc',
                  [s.desc]: sortConfig.direction === 'desc',
                })}
              />
            )}
          </th>
        ))}
        <th></th>
      </tr>
    </thead>
  )
}
