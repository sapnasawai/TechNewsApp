 import React from 'react'
import Pagination from './components/Pagination';
 import Search from "./components/Search"
import Stories from './components/Stories';
import "./App.css";

const App = () => {
 
  return (
    <>
    
    <Search/>
    <Pagination/>
    <Stories/>
    </>
  );
}

export default App;
