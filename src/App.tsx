import React, { useEffect, useState } from "react"
import "./App.scss"
import NewsGrid from "./components/NewsGrid"
import { NewsType, returnedNewsDataType } from "./types/globalTypes"

function App() {
  const [newsItems, setNewsItems] = useState<NewsType[]>([])
  const APIKEY: string = "873bb42d84c34365a80ba866331d415f"
  useEffect(() => {
    getNews()
  }, [])

  const getNews = async () => {
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${APIKEY}`
    )
    const newsData = await data.json()
    let newDataArray: NewsType[] = []
    newsData.articles.forEach((news: returnedNewsDataType) => {
      // console.log(news)
      newDataArray.push({
        id:
          (news.title ? news.title : "") +
          (news.publishedAt ? news.publishedAt : new Date().toISOString()),
        title: news.title ? news.title : "",
        description: news.description ? news.description : "",
        url: news.url ? news.url : "",
        imageUrl: news.urlToImage ? news.urlToImage : "",
        content: news.content ? news.content : "",
        publishedDate: news.publishedAt
          ? new Date(news.publishedAt).toLocaleString()
          : "",
        source: news.source.name ? news.source.name : "",
        author: news.author ? news.author : "",
      })
    })
    setNewsItems(newDataArray)
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <NewsGrid newsItems={newsItems} />
    </div>
  )
}

export default App
