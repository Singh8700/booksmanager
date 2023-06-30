import styled from "styled-components"
import BooksDetails from "../bookDetails/BooksDetails"
import {useState} from "react"
const BooksAdd =({myData})=>{
  const [bookTitle,setBookTitle] = useState()
  const [bookAuthor,setBookAuthor] = useState()
  const [bookGirne,setBookGirne] = useState()
  const [getData,serGetData] = useState([])
  const [status,setStatus] = useState(false)
  const booksTitle=(e)=>{
    e.preventDefault
    setBookTitle(e.target.value)
  }
  const booksAuthor=(e)=>{
    e.preventDefault
    setBookAuthor(e.target.value)
  }
  const booksGirne=(e)=>{
    e.preventDefault
    setBookGirne(e.target.value)
  }
  const onSubmitHandler=(e)=>{
    e.preventDefault()
    setStatus(true)
    const myData={
      id:Math.random().toString(),
      bookTitle,
      bookGirne,
      bookAuthor
    }
    serGetData([...getData,myData])
    setBookGirne('')
    setBookAuthor('')
    setBookTitle('')
  }
  return (
    <>
   <div className="bookAddContainer flex">
    <h2 className="flex m2"> Book Management System</h2>
    <form className="flex" onSubmit={onSubmitHandler}>
      <h1>Book Add</h1>
    {/* books Name*/}
      <label forHTML="bookTitle">
      Book Title
      <input type="text" placeholder="Book Title Name" required autoComplete="off"
      id="bookTitle"
      onChange={booksTitle} value={bookTitle}/>
      </label>
      <br/>
      {/* books Author*/}
      <label forHTML="bookAuthor">
      Book Author
      <input type="text" placeholder="Book Author Name" required autoComplete="off"
      id="bookAuthor"
      onChange={booksAuthor} value={bookAuthor}/>
      </label>
       <br/>
   {/* books Girnes*/}
      <label forHTML="bookAdition">
      Book Adition
      <input type="text" placeholder="Book Generation year" required
      autoComplete="off" id="bookAdition"
      onChange={booksGirne} value={bookGirne}/>
      </label>
      <br/>
      <button type="submit">
        Add Book
      </button>
    </form>
   </div>
  {status?<BooksDetails setData={getData}/>:''}
   </>
    )
   
}
export default BooksAdd