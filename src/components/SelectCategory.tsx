import React, { useEffect, useContext } from "react"
import { newsItemsContext } from "../store/newsItemContext"

import "./FilterNews.scss"
const SelectCategory: React.FC = () => {
  const newsCtx = useContext(newsItemsContext)
  useEffect(() => {
    clickCategory()
  }, [])
  const clickCategory = () => {
    const categoryElement =
      document.querySelectorAll<HTMLInputElement>(".category")
    categoryElement.forEach((el: HTMLElement) => {
      if (newsCtx.newsCategoryName === el.innerHTML) {
        el.className += " current"
      }
    })
  }
  return (
    <div className="category-wrapper">
      <button onClick={clickCategory} className="category">
        business
      </button>
      <button onClick={clickCategory} className="category">
        entertainment
      </button>
      <button onClick={clickCategory} className="category">
        health
      </button>
      <button onClick={clickCategory} className="category">
        science
      </button>
      <button onClick={clickCategory} className="category">
        sports
      </button>
      <button onClick={clickCategory} className="category">
        technology
      </button>
    </div>
  )
}

export default SelectCategory
