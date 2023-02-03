import Card from "./Card"
import { NewsType } from "../types/globalTypes"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from "@fortawesome/free-solid-svg-icons"

const NewsGrid: React.FC<{ newsItems: NewsType[] }> = (props) => {
  return (
    <div className="card-wrapper">
      {props.newsItems.map((news) => (
        <Card key={news.id}>
          {news.imageUrl && <img src={news.imageUrl} alt="news image" />}
          {!news.imageUrl && (
            <div>
              <div className="font-awesome-camera-wrapper">
                <FontAwesomeIcon icon={faCamera} />
              </div>
              <p className="no-photo">No Photo</p>
            </div>
          )}
          <h1> {news.title}</h1>
        </Card>
      ))}
    </div>
  )
}

export default NewsGrid
