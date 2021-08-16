export const getActivitySquareStyle = (commitCount) => {
  console.log('commitCount', commitCount)
  switch (commitCount) {
    case 0:
      return ({ color: 'bg-gray-600', opacity: 'opacity-40' })
    case 1:
    case 2:
      return ({ color: 'bg-green-300', opacity: 'opacity-30' })
    case 3:
      return ({ color: 'bg-green-300', opacity: 'opacity-70' })
    case 4:
    case 5:
      return ({ color: 'bg-green-500', opacity: 'opacity-70' })
    case 6:
    case 7:
      return ({ color: 'bg-green-500', opacity: 'opacity-90' })
    case 8:
    case 9:
      return ({ color: 'bg-green-700', opacity: 'opacity-70' })
    default:
      return ({ color: 'bg-green-700', opacity: 'opacity-100' })
  }
}