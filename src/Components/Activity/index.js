import React from 'react'
import { ActivityWeek } from './ActivityWeek'

export const Activity = ({ activity }) => {
  return (
    <div>

      {
        activity.length > 0 ? (
          <div className='grid grid-flow-col auto-cols-max mt-4'>
            <div className='flex-1'>
              <p className='mt-4 mr-1 text-xs'>Mon</p>
              <p className='mt-4 mr-1 text-xs'>Wed</p>
              <p className='mt-4 mr-1 text-xs'>Fri</p>
            </div>
            {activity.map((week, index) => (<ActivityWeek key={week.week} weekData={week} prevWeek={activity[index - 1]?.week} />))}
          </div>
        ) : (
            <div>No results found</div>
          )
      }
    </div>
  )
}