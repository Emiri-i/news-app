import React, { useState, useEffect } from "react"
import { NewsType } from "../types/globalTypes"
import { country } from "../constant/constant"
type CountryType = {
  label: string
  value: string
}
type NewsItemsContextObj = {
  items: NewsType[]
  setItems: (Array: NewsType[]) => void
  newsCategoryName: string
  setNewsCategoryName: (categoryName: string) => void
  countryValue: string
  countryIndex: number
  onCountryChange: (e: CountryType | unknown) => void
}

const newsItemsContext = React.createContext<NewsItemsContextObj>({
  items: [],
  setItems: (Array: NewsType[]) => {},
  newsCategoryName: "",
  setNewsCategoryName: (categoryName: string) => {},
  countryValue: "us",
  countryIndex: 0,
  onCountryChange: (e: CountryType | unknown) => {},
})
export { newsItemsContext }

const NewsItemContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [newsItems, setNewsItems] = useState<NewsType[]>([])
  const [currentNewsCategory, setCurrentNewsCategory] = useState("business")
  const [countryVal, setCountryValue] = useState("us")
  const [countryIndex, setCountryIndex] = useState(0)

  useEffect(() => {
    const index = country.map((c) => c.value).indexOf(countryVal)
    setCountryIndex(index)
  }, [countryVal])

  const onCountryChange = (e: CountryType | unknown) => {
    const targetValue = e as CountryType
    setCountryValue(targetValue.value)
  }

  const setItems = (val: NewsType[]) => {
    setNewsItems(val)
  }

  const contextValue: NewsItemsContextObj = {
    items: newsItems,
    setItems,
    newsCategoryName: currentNewsCategory,
    setNewsCategoryName: setCurrentNewsCategory,
    countryValue: countryVal,
    countryIndex,
    onCountryChange,
  }
  return (
    <newsItemsContext.Provider value={contextValue}>
      {children}
    </newsItemsContext.Provider>
  )
}

export default NewsItemContextProvider
