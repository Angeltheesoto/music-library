import { useState } from 'react'

function SearchBar(props) {
 // let [searchTerm, setSearchTerm] = useState('')

 return (
  // onSubmit={(e) => props.handleSearch(e, searchTerm)} - this goes in form
  <form >
   <input type='text' placeholder="Enter a search term here" 
   onChange={
    // (e) => setSearchTerm(e.target.value)
    (e) => props.handleSearch(e, e.target.value)
   }
   />
   <input type="submit" />
  </form>
 )
}

export default SearchBar