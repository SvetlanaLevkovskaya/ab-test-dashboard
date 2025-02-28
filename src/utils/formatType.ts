import { Type } from '../types'

export const formatType = (type: Type): string => {
  if (type === Type.MVT) {
    return type
  }

  return type
    .toLowerCase()
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('-')
}
