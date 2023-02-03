import Card from "./Card"
import { NewsType } from "../types/globalTypes"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from "@fortawesome/free-solid-svg-icons"

const NewsGrid: React.FC<{ newsItems: NewsType[] }> = (props) => {
  console.log("test", props.newsItems)
  return (
    <div className="card-wrapper">
      {props.newsItems.map((news) => (
        <Card key={news.id}>
          {news.imageUrl && <img src={news.imageUrl} alt="news image" />}
          {!news.imageUrl && (
            <div className="no-photo-wrapper">
              <div className="font-awesome-camera-wrapper">
                <FontAwesomeIcon icon={faCamera} />
              </div>
              <p className="no-photo">No Photo</p>
            </div>
          )}
          <div className="news-text-wrapper">
            <p className="news-source">{news.source}</p>
            <p className="news-title"> {news.title}</p>
            <p className="news-content">{news.content}</p>
            <p className="news-publised-date">{news.publishedDate}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default NewsGrid
