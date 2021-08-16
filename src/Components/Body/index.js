import React, { useState } from 'react'
import { Copy } from '../Copy'
import { Activity } from '../Activity'
import { fetchGithubActivity } from '../../services/github'

export const Body = () => {
  const [activity, setActivity] = useState([])
  const fetchActivity = (githubHandle) => {
    console.log(fetchGithubActivity(githubHandle))
  }
  return (
    <div className='flex-1 my-6'>
      <Copy fetchActivity={fetchActivity} />
      <Activity activity={activity} />
    </div>
  )
}