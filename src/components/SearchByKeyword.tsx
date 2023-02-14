import "./SearchByKeyword.scss"
import { newsItemsContext } from "../store/newsItemContext"
import { useContext, useRef } from "react"

const SearchByKeyWord = () => {
  const newsCtx = useContext(newsItemsContext)
  const inputElement = useRef<HTMLInputElement>(null)
  const submit = () => {
    newsCtx.setKeyWord(inputElement?.current?.value)
  }
  return (
    <div className="search-keyword-wrapper">
      <label>
        <div className="search-keyword-label-wrapper">
          <div className="search-keyword-label">Search By Keyword</div>
        </div>
        <div className="search-input-section-wrapper">
          <div className="search-keyword-input-wrapper">
            <input
              className="search-keyword-input"
              type="text"
              ref={inputElement}
            />
          </div>
          <button className="search-button" onClick={submit}>
            search
          </button>
        </div>
      </label>
    </div>
  )
}

export default SearchByKeyWord
