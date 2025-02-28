import s from './TableEmptyState.module.scss'

interface Props {
  onReset: () => void
}

export const TableEmptyState = ({ onReset }: Props) => {
  return (
    <div className={s.container}>
      <p>Your search did not match any results.</p>
      <button onClick={onReset} className={s.button}>
        Reset
      </button>
    </div>
  )
}
