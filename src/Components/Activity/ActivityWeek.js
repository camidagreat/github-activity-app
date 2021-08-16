import React from 'react'
import { ActivityDay } from './ActivityDay'

export const ActivityWeek = ({ weekData }) => {
  const days = weekData.days
  console.log('days', days)
  return (
    <div className='mr-1 grid grid-flow-row auto-rows-max'>
      {days.map((day) => (
        <ActivityDay commitCount={day} />
      ))}
    </div>
  )
}