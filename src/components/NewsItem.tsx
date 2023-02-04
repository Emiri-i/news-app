import { NewsType } from "../types/globalTypes"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from "@fortawesome/free-solid-svg-icons"

const NewsItem: React.FC<{ newsItem: NewsType }> = (props) => {
  return (
    <>
      {props.newsItem.imageUrl && (
        <img src={props.newsItem.imageUrl} alt="news image" />
      )}
      {!props.newsItem.imageUrl && (
        <div className="no-photo-wrapper">
          <div className="font-awesome-camera-wrapper">
            <FontAwesomeIcon icon={faCamera} />
          </div>
          <p className="no-photo">No Photo</p>
        </div>
      )}
      <div className="news-text-wrapper">
        <p className="news-source">{props.newsItem.source}</p>
        <p className="news-title"> {props.newsItem.title}</p>
        <p className="news-content">{props.newsItem.content}</p>
        <p className="news-publised-date">{props.newsItem.publishedDate}</p>
      </div>
    </>
  )
}

export default NewsItem
