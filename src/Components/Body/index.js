import React, { useState } from 'react'
import { Copy } from '../Copy'
import { Activity } from '../Activity'
import { fetchGithubActivity } from '../../services/github'

export const Body = () => {
  const [activity, setActivity] = useState([])
  const fetchActivity = async (githubHandle) => {
    const activity = await fetchGithubActivity(githubHandle)
    setActivity(activity || [])
  }
  return (
    <div className='my-6'>
      <div className='px-6 flex-1'>
        <Copy fetchActivity={fetchActivity} />
        <Activity activity={activity} />
      </div>
    </div>
  )
}