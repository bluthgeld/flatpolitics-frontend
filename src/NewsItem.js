import React from 'react'

const NewsItem = (props) => {
  return (
    <div>
      <a href={props.newsItem.url} class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{props.newsItem.title}</h5>
        </div>
        <p class="mb-1">{props.newsItem.content}</p>
        <small class="text-muted">{props.newsItem.date_time}</small>
      </a>
    </div>
  )
}

export default NewsItem
