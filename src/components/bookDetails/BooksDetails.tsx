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
           <td>
            <span>Books Name:</span>
           </td>
           <th>
              <h1 class="bookTitle">
                {item.bookTitle}
              </h1>
           </th>
         </tr>
         <tr>
           <td>
           <span>Author Name:</span>
           </td>
           <th>
             <h2 class="bookAuthor">
              {item.bookAuthor}
            </h2>
           </th>
         </tr>
         <tr>
          <td>
        <span>Books Generation:</span> 
          </td>
          <td>
          <p class="bookAdition">
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