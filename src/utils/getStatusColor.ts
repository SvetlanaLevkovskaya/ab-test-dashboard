const statusColor = ['#E14165', '#C2C2FF', '#8686FF']

export const getStatusColor = (index: number) => {
  return statusColor[index % statusColor.length]
}
