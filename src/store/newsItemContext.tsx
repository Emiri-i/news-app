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
  searchKeyWord: string
  setKeyWord: (keyword: string | undefined) => void
}

const newsItemsContext = React.createContext<NewsItemsContextObj>({
  items: [],
  setItems: (Array: NewsType[]) => {},
  newsCategoryName: "business",
  setNewsCategoryName: (categoryName: string) => {},
  countryValue: "all",
  countryIndex: 0,
  onCountryChange: (e: CountryType | unknown) => {},
  searchKeyWord: "",
  setKeyWord: (keyword: string | undefined) => {},
})
export { newsItemsContext }

const NewsItemContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [newsItems, setNewsItems] = useState<NewsType[]>([])
  const [currentNewsCategory, setCurrentNewsCategory] = useState("business")
  const [countryVal, setCountryValue] = useState("all")
  const [countryIndex, setCountryIndex] = useState(0)
  const [searchKeyWord, setSearchKeyWord] = useState("")

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

  const setKeyWord = (kw: string | undefined) => {
    if (!kw) {
      setSearchKeyWord("")
    } else {
      setSearchKeyWord(kw)
    }
  }

  const contextValue: NewsItemsContextObj = {
    items: newsItems,
    setItems,
    newsCategoryName: currentNewsCategory,
    setNewsCategoryName: setCurrentNewsCategory,
    countryValue: countryVal,
    countryIndex,
    onCountryChange,
    searchKeyWord,
    setKeyWord,
  }
  return (
    <newsItemsContext.Provider value={contextValue}>
      {children}
    </newsItemsContext.Provider>
  )
}

export default NewsItemContextProvider
