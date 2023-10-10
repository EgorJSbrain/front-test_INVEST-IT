import React, { useEffect, useState, useCallback } from "react";

import "./App.css";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  useEffect(() => {
    const value = localStorage.getItem('app-theme')

    setIsDarkTheme(value === 'true' ? true : false)
  }, [])

  const toggleTheme = useCallback((value) => {
    setIsDarkTheme(value)
    localStorage.setItem('app-theme', value)
  }, [])

  return (
    <div className={isDarkTheme ? "dark-mode" : ""}>
      <Header changeTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <List />
    </div>
  );
}

export default App;
