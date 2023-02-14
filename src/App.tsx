import "./App.scss"
import NewsGrid from "./components/NewsGrid"
import FilterNews from "./components/FilterNews"
import useFetchData from "./hooks/useFetchData"

function App() {
  useFetchData() //fetch API and set all the data in the state

  return (
    <div className="App">
      <header className="app-header">
        <div className="page-title">Find The Latest News</div>
        <FilterNews />
      </header>
      <NewsGrid />
    </div>
  )
}

export default App
