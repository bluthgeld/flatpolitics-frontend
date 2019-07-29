import React from 'react'
import Tweet from './Tweet.js'

const TwitterContainer = () => {
  return (
    <div>
      <h3>Twitter</h3>
      <div class="list-group">
          <Tweet />
          <Tweet />
          <Tweet />
      </div>
    </div>
  )
}

export default TwitterContainer
