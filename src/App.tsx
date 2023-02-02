import React, { useEffect} from 'react';
import './App.css';

function App() {
  const apiKey = "873bb42d84c34365a80ba866331d415f";
  useEffect(() => {
    getNews();
  },[])

  const getNews = async() => {
    const news = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`);
}

  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
