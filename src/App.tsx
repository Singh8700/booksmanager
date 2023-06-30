import { useState } from 'react'
import {
 useLocation,
  Routes,
  Route
} from "react-router-dom";
import BooksAdd from "./components/booksAdd/BooksAdd"

function App() {
  
  return (
  <Routes>
    <Route path="/" element={<BooksAdd/>}/>
  </Routes>
  )
}

export default App
