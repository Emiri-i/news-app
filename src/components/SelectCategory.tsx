import React, { useEffect, useContext } from "react"
import { newsItemsContext } from "../store/newsItemContext"

import "./SelectCategory.scss"

const SelectCategory: React.FC = () => {
  const newsCtx = useContext(newsItemsContext)
  useEffect(() => {
    clickCategory()
  }, [])
  useEffect(() => {
    changeCategory()
  }, [newsCtx.newsCategoryName])
  const clickCategory = (e?: React.MouseEvent) => {
    if (e) {
      const eventTarget = e.target as HTMLElement
      newsCtx.setNewsCategoryName(eventTarget.innerHTML.toLowerCase())
    }
  }

  const changeCategory = () => {
    const categoryElement =
      document.querySelectorAll<HTMLInputElement>(".category")
    categoryElement.forEach((el: HTMLElement) => {
      if (newsCtx.newsCategoryName === el.innerHTML) {
        el.className = "category current"
      } else {
        el.className = "category"
      }
    })
  }

  return (
    <div className="category-wrapper">
      <button onClick={clickCategory} className="category">
        Business
      </button>
      <button onClick={clickCategory} className="category">
        Entertainment
      </button>
      <button onClick={clickCategory} className="category">
        Health
      </button>
      <button onClick={clickCategory} className="category">
        Science
      </button>
      <button onClick={clickCategory} className="category">
        Sports
      </button>
      <button onClick={clickCategory} className="category">
        Technology
      </button>
    </div>
  )
}

export default SelectCategory
