import "./SearchByKeyword.scss"

const SearchByKeyWord = () => {
  return (
    <div className="search-keyword-wrapper">
      <label>
        <div className="search-keyword-label-wrapper">
          <div className="search-keyword-label">Search By Keyword</div>
        </div>
        <div className="search-input-section-wrapper">
          <div className="search-keyword-input-wrapper">
            <input className="search-keyword-input" type="text" />
          </div>
          <button className="search-button">search</button>
        </div>
      </label>
    </div>
  )
}

export default SearchByKeyWord
