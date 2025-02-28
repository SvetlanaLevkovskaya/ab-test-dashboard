import { Link } from 'react-router-dom'

import { ArrowIcon } from '@components/ui/Icons/ArrowIcon.tsx'

import s from './PromoPage.module.scss'

interface Props {
  title: string
  description: string
}

export const PromoPage = ({ title, description }: Props) => {
  return (
    <div className={s.container}>
      <h2>{title}</h2>
      <p>{description}</p>

      <Link to={'/'} className={s.link}>
        <ArrowIcon className={s.arrowIcon} />
        <span>Back</span>
      </Link>
    </div>
  )
}
