import React from 'react'

const SearchArea = ({handleSubmit, handleChange})=>{
 return (
     <div className="container">
         <section className="col s4 offset-4">
             <form action="" onSubmit={handleSubmit}>
                 <div className="input-field">
                     <input placeholder="Search movies" type="text" onChange={handleChange}/> 
                 </div>
                 </form> 
         </section>
     </div>
 )
}

export default SearchArea