import { Link } from 'react-router-dom'

export const Finalize = () => {
  return (
    <>
      <h2 style={{ fontSize: '26px', fontWeight: 700 }}>Finalize</h2>
      <p style={{ fontSize: '14px', fontWeight: 600 }}>Spring promotion</p>

      <Link to={'/'}>Back</Link>
    </>
  )
}
