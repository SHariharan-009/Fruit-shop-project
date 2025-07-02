import React from 'react' 
import "./Header.css"
import menuSVG from "../../src/assets/menu.svg"

const Header = () => { 
  return (
    <div className='shname'>
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/></svg>
     <label>Shop name</label>
     <a href="#" alt="empty"> Home </a>
     <a href="#" alt="empty"> Offers </a>
     <a href="#" alt="empty"> Search </a>
     <input type="checkbox" id="clk"></input><label for="clk" className="lab"></label>
    </div>
  )
}

export default Header