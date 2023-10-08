import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function SearchBar() {
  return (
    <section>
    <div className='form'>
      <Link to="/">
      <div className='emailtext'>DEV@Deakin</div>
      </Link>
      <div className='form1'>
        <button className='ai'>
          <AiOutlineSearch size={22} />
        </button>
        <input className='search' type='text' placeholder='Search...'></input>
      </div>
      <button className='button'>Post</button>
      <Link to="/login">
      <button className='button'>Login</button>   
      </Link>      
    </div>
    <Outlet />
    </section>   
  );
}
export default SearchBar;
