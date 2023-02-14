import Card from "./Card"
import NewsItem from "./NewsItem"
import { newsItemsContext } from "../store/newsItemContext"
import { useContext } from "react"

const NewsGrid: React.FC = () => {
  const newsCtx = useContext(newsItemsContext)
  return (
    <div className="card-wrapper">
      {newsCtx.isSearching && <div className="loading-text">Loading...</div>}
      {!newsCtx.isSearching && !newsCtx.items.length && (
        <>
          <div className="no-news-item-text">No News Found.</div>
        </>
      )}
      {!newsCtx.isSearching && newsCtx.items.length ? (
        <>
          {newsCtx.items.map((news) => (
            <Card key={news.id} newsItem={news}>
              <NewsItem newsItem={news}></NewsItem>
            </Card>
          ))}
        </>
      ) : null}
    </div>
  )
}

export default NewsGrid
