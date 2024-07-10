import React from 'react'
import './searchBar.css'

const searchBar = () => {
  return (
    <div>
        <form>
            <input className='searchBar' type='text' placeholder=''/>
            <br />
            <button className='searchButton'>Search</button>
        </form>
    </div>
  )
}

export default searchBar