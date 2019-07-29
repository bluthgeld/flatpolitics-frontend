import React from 'react'
import NewsItem from './NewsItem.js'

const NewsContainer = () => {
  return (
    <div>
      <h3>News</h3>
      <div class="list-group">
          <NewsItem />
          <NewsItem />
          <NewsItem />
      </div>
    </div>
  )
}

export default NewsContainer
