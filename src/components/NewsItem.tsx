import React from "react"

import { NewsType } from "../types/globalTypes"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from "@fortawesome/free-solid-svg-icons"

const NewsItem: React.FC<{ newsItem: NewsType }> = (props) => {
  const websiteUrl = props.newsItem.url.split("https://").pop()?.split("/")[0]
  const faviconImgUrl = `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${websiteUrl}&size=16`
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
          <div className="favicon-wrapper">
            <img
              className="favicon"
              src={faviconImgUrl}
              alt={props.newsItem.source}
            />
          </div>
          <p className="news-source">{props.newsItem.source}</p>
        </div>
        <p className="news-title">
          {props.newsItem.title.length < 90
            ? props.newsItem.title
            : props.newsItem.title.substr(0, 90) + "…"}
        </p>
        <p className="news-content">
          {props.newsItem.content
            ? props.newsItem.content
            : "No news content found."}
        </p>
        <p className="news-publised-date">{props.newsItem.publishedDate}</p>
      </div>
    </>
  )
}

export default NewsItem
