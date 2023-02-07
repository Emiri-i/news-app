import React, { useState } from "react"
import { NewsType } from "../types/globalTypes"

type NewsItemsContextObj = {
  items: NewsType[]
  setItems: (Array: NewsType[]) => void
  newsCategoryName: string
  setNewsCategoryName: (categoryName: string) => void
}

export const newsItemsContext = React.createContext<NewsItemsContextObj>({
  items: [],
  setItems: (Array: NewsType[]) => {},
  newsCategoryName: "",
  setNewsCategoryName: (categoryName: string) => {},
})

const NewsItemContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [newsItems, setNewsItems] = useState<NewsType[]>([])
  const [currentNewsCategory, setCurrentNewsCategory] = useState("business")

  const setItems = (val: NewsType[]) => {
    console.log("test", val)
    setNewsItems(val)
  }

  const contextValue: NewsItemsContextObj = {
    items: newsItems,
    setItems,
    newsCategoryName: currentNewsCategory,
    setNewsCategoryName: setCurrentNewsCategory,
  }
  return (
    <newsItemsContext.Provider value={contextValue}>
      {children}
    </newsItemsContext.Provider>
  )
}

export default NewsItemContextProvider
