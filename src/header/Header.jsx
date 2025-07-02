import React from 'react' 
import "./Header.css"
import menuSVG from "../../src/assets/menu.svg"

const Header = () => { 
  return (
    <div className='navbar'>
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/></svg>
     <label>Shop name</label>
     <div className="menu">
     <select name="" id="">
      <option value="">  - All categories -  </option>
      <option value="Fruits">Fruits</option>
      <option value="Juices">Juices</option>
      <option value="Snacks">Snacks</option>
     </select>
     <input type="text" className='searchbar' placeholder='  Search'/>
     <a href="#" alt="empty"> Search </a>
     <a href="#" alt="empty"> Home </a>
     <a href="#" alt="empty"> Offers </a>
     <a href="#" alt="empty"> Login </a>
     </div>
     <input type="checkbox" id="clk"></input><label for="clk" className="lab"></label>
    </div>
  )
}
export default Header