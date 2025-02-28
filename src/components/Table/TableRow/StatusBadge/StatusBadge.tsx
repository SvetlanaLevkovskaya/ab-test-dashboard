import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter.ts'

import { Status } from '../../../../types'

const statusColors: Record<Status, string> = {
  [Status.DRAFT]: '#5C5C5C',
  [Status.ONLINE]: '#1BDA9D',
  [Status.PAUSED]: '#FF8346',
  [Status.STOPPED]: '#FE4848',
}

export const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <span
      style={{
        color: statusColors[status],
        fontWeight: 500,
      }}
    >
      {capitalizeFirstLetter(status)}
    </span>
  )
}
