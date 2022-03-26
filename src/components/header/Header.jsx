import React from 'react'
import './header.scss';
const Header = () => {
  return (
    <header className='header'>
       <div className="container d-flex justify-content-between align-items-center">
           <div className="logo">
               <h1>Logo</h1>
           </div>
           <nav className="nav-menu">
               <ul className='list-unstyled d-flex m-0'>
                   <li>item1</li>
                   <li>item2</li>
                   <li>item3</li>
                   <li>item4</li>
                   <li>item5</li>
               </ul>
           </nav>
       </div>
    </header>
  )
}

export default Header