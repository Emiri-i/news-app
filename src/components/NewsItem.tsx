import React from "react"

import { NewsType } from "../types/globalTypes"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from "@fortawesome/free-solid-svg-icons"
import { faNewspaper } from "@fortawesome/free-solid-svg-icons"

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
        <div className="news-source-wrapper">
          <FontAwesomeIcon className="news-icon" icon={faNewspaper} />
          <p className="news-source">{props.newsItem.source}</p>
        </div>
        <div className="news-title-wrapper">
          <p className="news-title">
            {props.newsItem.title.length < 90
              ? props.newsItem.title
              : props.newsItem.title.substr(0, 90) + "…"}
          </p>
        </div>
        <div className="news-content-wrapper">
          <p className="news-content">
            {props.newsItem.content
              ? props.newsItem.content
              : "No news content found."}
          </p>
        </div>
        <p className="news-publised-date">{props.newsItem.publishedDate}</p>
      </div>
    </>
  )
}

export default NewsItem
