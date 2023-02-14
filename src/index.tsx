import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import NewsItemContextProvider from "./store/newsItemContext"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <NewsItemContextProvider>
    <App />
  </NewsItemContextProvider>
)
