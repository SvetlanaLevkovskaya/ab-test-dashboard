import { Link } from 'react-router-dom'

export const Finalize = () => {
  return (
    <>
      <h2 style={{ textAlign: 'left', fontSize: '26px', fontWeight: 700, color: '#222222' }}>
        Finalize
      </h2>
      <p style={{ textAlign: 'left', fontSize: '14px', fontWeight: 600 }}>Spring promotion</p>

      <Link to={'/'}>Back</Link>
    </>
  )
}
