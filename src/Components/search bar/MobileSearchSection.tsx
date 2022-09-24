import React from 'react'
import list from "../data2/Data2";
import SearchBar from '../search bar/SearchBar';

function MobileSearchSection() {
  return (
    <div className='mt-12 md:hidden'>
        <SearchBar placeholder="Search..." data={list}/>
    </div>
  )
}

export default MobileSearchSection