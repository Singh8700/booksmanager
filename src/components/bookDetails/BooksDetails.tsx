import styled from "styled-components"


const BooksDetails=(props)=>{
  return (
    <>
   <h2 className="flex m2"> Books Library</h2>
    <div class="bookContainer">
    {props.setData.map((item)=>{
      return(
       <article key={item.id}>
        <table border="1">
         <tr>
           <th>
              <h1 class="bookTitle">
              <span>Books Title is </span>
              <br/>
                {item.bookTitle}
              </h1>
           </th>
         </tr>
         <tr>
           <th>
             <h2 class="bookAuthor">
       <span>This Book Author is 👇 </span><br/>
           Dear , {item.bookAuthor}

            </h2>
           </th>
         </tr>
         <tr>
          <td>
          <p class="bookAdition">
        <span>Books is </span>
            {item.bookGirne}
          </p>
          </td>
        </tr>
        </table>
      </article>
        )
    })}
    </div>
    </>
    )
}
export default BooksDetails