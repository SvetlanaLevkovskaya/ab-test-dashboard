import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { RowButton } from '@components/Table/TableRow/RowButton/RowButton.tsx'
import { StatusBadge } from '@components/Table/TableRow/StatusBadge/StatusBadge.tsx'
import { formatType } from '@utils/formatType.ts'
import { formatUrl } from '@utils/formatUrl.ts'
import { getStatusColor } from '@utils/getStatusColor.ts'
import cls from 'classnames'

import s from './TableRow.module.scss'

import { Status, Test } from '../../../types'

interface Props {
  item: Test
  index: number
}

export const TableRow = ({ item, index }: Props) => {
  const navigate = useNavigate()

  const handleRowClick = useCallback(
    (testId: number) => {
      navigate(`/results/${testId}`)
    },
    [navigate]
  )

  const rowColor = getStatusColor(index)

  return (
    <tr key={item.id} onClick={() => handleRowClick(item.id)}>
      <td className={s.nameCell}>
        <div className={cls(s.statusIndicator)} style={{ backgroundColor: rowColor }} />
        {item.name}
      </td>
      <td>{formatType(item.type)}</td>
      <td>
        <StatusBadge status={item.status as Status} />
      </td>
      <td>{item.site?.url ? formatUrl(item.site.url) : ''}</td>
      <td>
        <RowButton status={item.status} testId={item.id} />
      </td>
    </tr>
  )
}
