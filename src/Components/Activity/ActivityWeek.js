import React from 'react'
import { ActivityDay } from './ActivityDay'

export const ActivityWeek = ({ weekData, prevWeek }) => {
  const monthNames = ["Jan", "Feb", "March", "April", "May", "June",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];

  const days = weekData.days
  const week = weekData.week
  const weekMonth = new Date(week * 1000)
  const prevWeekMonth = new Date(prevWeek * 1000)
  const monthHeader = weekMonth.getMonth() !== prevWeekMonth.getMonth() ? monthNames[weekMonth.getMonth()] : ''

  return (
    <div className='mr-1 grid grid-flow-row auto-rows-max relative'>
      <div className='absolute bottom-32 left-0.5'>
        <span className='relative'>
          <p className='text-xs absolute top-0.3'>{monthHeader}</p>
        </span>
      </div>
      {days.map((day, index) => (
        <ActivityDay key={`${weekMonth}-${index}`} commitCount={day} />
      ))}
    </div>
  )
}