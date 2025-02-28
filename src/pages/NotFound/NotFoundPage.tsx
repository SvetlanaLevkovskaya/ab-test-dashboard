import { useNavigate } from 'react-router-dom'

import styles from './NotFoundPage.module.scss'

export const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1>Oh, it seems you're a little lost...</h1>
          <span>The page you are looking for does not exist</span>
          <button
            onClick={() => {
              navigate('/')
            }}
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  )
}
