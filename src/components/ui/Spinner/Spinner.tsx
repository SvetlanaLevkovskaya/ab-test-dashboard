import s from './Spinner.module.scss'

interface Props {
  size?: number
  center?: boolean
  className?: string
  currentColor?: boolean
}

export const Spinner = ({ size = 50, currentColor }: Props) => {
  return (
    <div className={s.container}>
      <div className={s.innerContainer}>
        <div className={s.spinnerWrapper}>
          <svg viewBox="0 0 100 100" width={size} height={size} className={s.spinner}>
            <circle
              cx="50"
              cy="50"
              fill="none"
              stroke={currentColor ? 'currentColor' : '#caccd1'}
              strokeWidth="8"
              r="35"
              strokeDasharray="164.93361431346415 56.97787143782138"
              transform="matrix(1,0,0,1,0,0)"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
