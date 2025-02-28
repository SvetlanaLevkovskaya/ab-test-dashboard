import { ChangeEvent } from 'react'

import { SearchIcon } from '@components/ui/Icons/SearchIcon'
import { pluralize } from '@utils/pluralize.ts'

import s from './SearchInput.module.scss'

interface Props {
  value: string
  onChange: (value: string) => void
  count: number
}

export const SearchInput = ({ value, onChange, count }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className={s.searchInput}>
      <SearchIcon className={s.icon} />
      <input
        type="text"
        placeholder="What test are you looking for?"
        value={value}
        onChange={handleChange}
        className={s.input}
      />
      <span className={s.count}>
        {count} {pluralize(count, 'test', 'tests')}
      </span>
    </div>
  )
}
