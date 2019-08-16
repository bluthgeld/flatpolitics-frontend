import React, { Component } from 'react'
import NewsItem from './NewsItem.js'

class NewsContainer extends Component {


    constructor() {
      super()

      this.state = {
        newsdata: []
      }

    }


    componentDidMount() {
      fetch("http://localhost:3000/news")
        .then(resp => resp.json())
        .then(news => {
          let topfive = news.slice(0,5)
          this.setState( {newsdata: topfive})
        })
    }


    render() {
      return (
        <div>
          <h3>News</h3>
          <div className="list-group">
            {this.state.newsdata.map(newsItem => <NewsItem
              newsItem={newsItem}
              key={newsItem.id}
              />)}
          </div>
        </div>
      )
    }

}

export default NewsContainer
