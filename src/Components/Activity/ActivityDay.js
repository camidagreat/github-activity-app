import React from 'react'
import { getActivitySquareStyle } from '../../helpers/display'

export const ActivityDay = ({ commitCount }) => {
  const styleProps = getActivitySquareStyle(commitCount)
  return (
    <div className='has-tooltip'>
      <div className={`mb-1 w-3 h-3 rounded-sm ${styleProps?.opacity} ${styleProps?.color}`}>
      </div>
      <span className='tooltip bg-green-100 p-3 -mt-1 ml-4 lg:-mt-8 rounded'>{commitCount} commits</span>
    </div>
  )
}