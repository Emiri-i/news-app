import React, { useEffect, useContext } from "react"
import { NewsType, returnedNewsDataType } from "../types/globalTypes"
import { newsItemsContext } from "../store/newsItemContext"

const useFetchData = () => {
  const newsCtx = useContext(newsItemsContext)
  const APIKEY: string = "873bb42d84c34365a80ba866331d415f"
  useEffect(() => {
    getNews(newsCtx.newsCategoryName)
  }, [])
  const getNews = async (categoryName: string) => {
    try {
      const data = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${categoryName}&apiKey=${APIKEY}`
      )
      const newsData = await data.json()
      if (newsData.status !== "ok") {
        throw new Error("Getting news data failed.")
      }
      let newDataArray: NewsType[] = []
      newsData.articles.forEach((news: returnedNewsDataType) => {
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
      newsCtx.setItems(newDataArray)
      console.log("newsCtx", newsCtx)
    } catch (e) {
      window.alert(e)
    }
  }
}

export default useFetchData
