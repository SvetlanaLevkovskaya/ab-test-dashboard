import { Link } from 'react-router-dom'

export const Results = () => {
  return (
    <>
      <h2 style={{ fontSize: '26px', fontWeight: 700 }}>Results</h2>
      <p style={{ fontSize: '14px', fontWeight: 600 }}>Order basket redesign</p>

      <Link to={'/'}>Back</Link>
    </>
  )
}
