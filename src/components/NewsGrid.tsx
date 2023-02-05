import Card from "./Card"
import NewsItem from "./NewsItem"
import { NewsType } from "../types/globalTypes"

const NewsGrid: React.FC<{ newsItems: NewsType[] }> = (props) => {
  return (
    <div className="card-wrapper">
      {props.newsItems.map((news) => (
        <Card key={news.id} newsItem={news}>
          <NewsItem newsItem={news}></NewsItem>
        </Card>
      ))}
    </div>
  )
}

export default NewsGrid
