import React from 'react'

export const Copy = ({ fetchActivity }) => {

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetchActivity(e.target.value.trim())
    }
  }

  return (
    <div className='pb-5'>
      <p className='font-serif'>Enter the URL for any github repo to display its activity.</p>
      <input
        type="text"
        className="form-input px-2 py-2 rounded"
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </div>
  )
}