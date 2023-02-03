import Card from "./Card"
import { NewsType } from "../types/globalTypes"

const NewsGrid: React.FC<{ newsItems: NewsType[] }> = (props) => {
  return (
    <div className="card-wrapper">
      {props.newsItems.map((news) => (
        <Card key={news.id}>
          {news.imageUrl && <img src={news.imageUrl} alt="news image" />}
          {!news.imageUrl && <p>No Photo</p>}
          <h1> {news.title}</h1>
        </Card>
      ))}
    </div>
  )
}

export default NewsGrid
