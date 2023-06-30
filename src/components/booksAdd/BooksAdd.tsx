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
      Book Generation &nbsp;
        <select onChange={booksGirne} name="Gen" id="bookAdition">
      <option value="">
        Select Gen
        </option>
        <option value="1st Gen">
        1st Gen
        </option>
        <option value="2nd Gen">
        2nd Gen
        </option>
        <option value="3rd Gen">
        3rd Gen
        </option>
        <option value="4th Gen">
        4th Gen
        </option>
        <option value="5th Gen">
        5th Gen
        </option>
        <option value="6th Gen">
        6th Gen
        </option>
        <option value="7th Gen">
        7th Gen
        </option>
        <option value="8th Gen">
        8th Gen
        </option>
        <option value="9th Gen">
        9th Gen
        </option>
        <option value="10th Gen">
        10th Gen
        </option>
        </select>
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