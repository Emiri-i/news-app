import "./SearchByKeyword.scss"

const SearchByKeyWord = () => {
  return (
    <>
      <label>
        <div className="search-keyword-label-wrapper">
          <div className="search-keyword-label">Search By Keyword</div>
        </div>
        <div className="search-keyword-input-wrapper">
          <input className="search-keyword-input" type="text" />
        </div>
      </label>
    </>
  )
}

export default SearchByKeyWord
