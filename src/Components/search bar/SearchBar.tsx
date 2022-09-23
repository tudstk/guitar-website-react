import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

function SearchBar({placeholder, data}:any) {

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');
  const [error, setError] = useState(false);
  
  const handleFilter = (event:any) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value:any) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    })
    if(searchWord === ''){
      setFilteredData([]);
    }
    else{
      setFilteredData(newFilter);
      setError(false);
    }
    if (newFilter.length === 0){
      setError(true);
    }
  }

  const handleClose = () => {
    setFilteredData([]);
    setWordEntered('');
  }

  return (
    <div className='mt-20 flex flex-col justify-center items-center'>
      <div className='flex flex-col'>
        <div className='flex'>
            <input placeholder={placeholder} 
            className="hidden md:block md:bg-navbar-black-2 w-80 h-8 text-slate-200 opacity-80 p-4 pl-6 rounded-l-3xl focus:outline-0 focus:opacity-100"
            onChange={handleFilter}
            value={wordEntered}
            />
            <div className='bg-navbar-black-2 h-8 rounded-r-3xl flex items-center justify-center p-2'>
              { filteredData.length === 0 ? <SearchIcon className='opacity-80 text-slate-400'/> : <CloseIcon className='opacity-80 text-slate-400 hover:cursor-pointer hover:opacity-100' onClick={handleClose}/>}
            </div>
          </div>
          {error === true ? <div className='text-slate-400 mt-1'>No results found for your search</div> : ''}
      </div>
      { filteredData.length !== 0 && (
        <div className='w-80 h-24 bg-navbar-black text-slate-300 overflow-hidden flex flex-col text-start '>
          {filteredData.map((value:any,key:any) => {
              return (
                <div className='hover:bg-navbar-black-2/70 px-4 py-1'>
                  <Link to={`/products/${value.title}`}  className='hover:text-slate-50'>
                    {value.title}
                  </Link>
                </div>
              )
          })}
        </div>
      )}
    </div>
  )
}

export default SearchBar