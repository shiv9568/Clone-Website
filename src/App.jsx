import React from "react";
import Home from "./Component/Home/Home";
import Work from "./Component/Work/Work";
import Blog from "./Component/Blog/Blog";
import Contact from "./Component/Contact/Contact";
import styles from './App.module.css'
function App()
{
  return (
    <div className={`${styles.bg}`}>
      <Home/>
      <Work/>
      <Blog/>
      <Contact/>
    </div>
  );
}
export default App;