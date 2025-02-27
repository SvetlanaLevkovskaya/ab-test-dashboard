import { Link } from 'react-router-dom'

export const Results = () => {
  return (
    <>
      <h2 style={{ textAlign: 'left', fontSize: '26px', fontWeight: 700, color: '#222222' }}>
        Results
      </h2>
      <p style={{ textAlign: 'left', fontSize: '14px', fontWeight: 600, color: '#222222' }}>
        Order basket redesign
      </p>

      <Link to={'/'}>Back</Link>
    </>
  )
}
