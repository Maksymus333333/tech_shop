 import { NavLink } from "react-router-dom";
import React from 'react'; 
import './Navbar.css';

const Navbar = () => {
  return (

<div className = "header">  
<li  className="Pad_Phones" > <NavLink to = "/tech_shop"> Pad Phones  </NavLink>  </li>

<div className="search">
<div className="icon-search-parent">  
<svg className="icon-search" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M8.11111 15.2222C12.0385 15.2222 15.2222 12.0385 15.2222 8.11111C15.2222 4.18375 12.0385 1 8.11111 1C4.18375 1 1 4.18375 1 8.11111C1 12.0385 4.18375 15.2222 8.11111 15.2222Z" stroke="#454545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 17L13.1333 13.1333" stroke="#454545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 
<div className="div">Поиск</div>
</div>
</div>
 
<div className="tab-bar">
<NavLink to="/catalog" className="catalog">
        <div className="catalog-icon">
          <div className="catalog1">
            <div className="catalog-child" />
            <div className="catalog-item" />
          </div>
          <div className="catalog1">
            <div className="catalog-child" />
            <div className="catalog-item" />
          </div>
          <div className="catalog1">
            <div className="catalog-child" />
            <div className="catalog-item" />
          </div>
        </div>
        <div className="catalog4">
          <div className="div1">Каталог</div>
        </div>
</NavLink>

<NavLink to="/cart"className="basket"> 
<svg className="icon-basket" xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
<path d="M9.5 22C10.0523 22 10.5 21.5523 10.5 21C10.5 20.4477 10.0523 20 9.5 20C8.94772 20 8.5 20.4477 8.5 21C8.5 21.5523 8.94772 22 9.5 22Z" stroke="#454545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.5 22C20.0523 22 20.5 21.5523 20.5 21C20.5 20.4477 20.0523 20 19.5 20C18.9477 20 18.5 20.4477 18.5 21C18.5 21.5523 18.9477 22 19.5 22Z" stroke="#454545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.5 1H5.5L8.18 15.2823C8.27144 15.7734 8.52191 16.2145 8.88755 16.5285C9.25318 16.8424 9.7107 17.0092 10.18 16.9996H19.9C20.3693 17.0092 20.8268 16.8424 21.1925 16.5285C21.5581 16.2145 21.8086 15.7734 21.9 15.2823L23.5 6.3332H6.5" stroke="#454545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<div className="div1">Корзина</div>
</NavLink>

<NavLink to="/profil" className="profil"> 
<svg className="icon-profil" xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none">
<path d="M21 23V20.6667C21 19.429 20.4732 18.242 19.5355 17.3668C18.5979 16.4917 17.3261 16 16 16H6C4.67392 16 3.40215 16.4917 2.46447 17.3668C1.52678 18.242 1 19.429 1 20.6667V23" stroke="#454545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 11C13.2614 11 15.5 8.76142 15.5 6C15.5 3.23858 13.2614 1 10.5 1C7.73858 1 5.5 3.23858 5.5 6C5.5 8.76142 7.73858 11 10.5 11Z" stroke="#454545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<div className="div1">Профиль</div>
</NavLink>
</div>
</div>
);
};  

export default Navbar;
