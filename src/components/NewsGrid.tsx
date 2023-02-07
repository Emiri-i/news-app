import Card from "./Card"
import NewsItem from "./NewsItem"
import { newsItemsContext } from "../store/newsItemContext"
import { useContext } from "react"

const NewsGrid: React.FC = () => {
  const newsCtx = useContext(newsItemsContext)
  return (
    <div className="card-wrapper">
      {newsCtx.items.map((news) => (
        <Card key={news.id} newsItem={news}>
          <NewsItem newsItem={news}></NewsItem>
        </Card>
      ))}
    </div>
  )
}

export default NewsGrid
