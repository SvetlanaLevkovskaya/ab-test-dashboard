import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import cls from 'classnames'

import s from './RowButton.module.scss'

import { Status } from '../../../../types'

interface Props {
  status: Status
  testId: number
}

export const RowButton = ({ status, testId }: Props) => {
  const navigate = useNavigate()

  const handleButtonClick = (e: MouseEvent) => {
    e.stopPropagation()
    if (status === Status.DRAFT) {
      navigate(`/finalize/${testId}`)
    } else {
      navigate(`/results/${testId}`)
    }
  }

  return (
    <button
      onClick={handleButtonClick}
      className={cls(s.button, {
        [s.draft]: status === Status.DRAFT,
      })}
    >
      {status === Status.DRAFT ? 'Finalize' : 'Results'}
    </button>
  )
}
