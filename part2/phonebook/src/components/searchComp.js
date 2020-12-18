import React from 'react'

const Filter = ({nameFilter, setNameFilter, persons}) =>{
  const handleNameFilter = (event) => {
    setNameFilter(event.target.value)
    // console.log(event.target.value)
  }
  
  return (
    <form>
      <h2>Search Contact</h2>
      <input type="search" placeholder="Type to search" value={nameFilter} onChange={handleNameFilter}/>
    </form>
  )
}

export default Filter