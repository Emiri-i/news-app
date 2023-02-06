import React, { useEffect } from "react"

import "./FilterNews.scss"
const SelectCategory: React.FC<{ currentCategory: string }> = (props) => {
  useEffect(() => {
    clickCategory()
  }, [])
  const clickCategory = () => {
    const categoryElement =
      document.querySelectorAll<HTMLInputElement>(".category")
    categoryElement.forEach((el: HTMLElement) => {
      if (props.currentCategory === el.innerHTML) {
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
