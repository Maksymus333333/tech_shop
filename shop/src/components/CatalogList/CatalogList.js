import React from 'react';
import './CatalogList.css';
import { NavLink } from "react-router-dom";
import phone from '../catalog_photo/phone.svg';
import laptop from '../catalog_photo/laptop.svg';
import comp from '../catalog_photo/comp.svg';
import tv from '../catalog_photo/tv.svg';
import tablet from '../catalog_photo/tablet.svg';
import column from '../catalog_photo/column.svg'; 

const CatalogList = () => {
  return (  
    <>  
    <div className="smartphone">
    <div className="cat">Каталог</div>
   </div>   

    <div className="catalogl">     
      <div className="card">
      <NavLink to='/smartphones' className="nav-link">
        <div className="instance-parent">
          <div className="component-child">
            <img className="mask-group-iconp" alt="" src={phone} />
          </div>
          <div className="txt_cat">Смартфоны</div>
        </div>
        </NavLink>

        <NavLink to='/laptops' className="nav-link">
        <div className="instance-parent">
          <div className="component-child">
            <img className="mask-group-icon" alt="" src={laptop} />
          </div>
          <div className="txt_cat">Ноутбуки</div>
        </div>
        </NavLink>

        <NavLink to='/computers' className="nav-link"> 
        <div className="instance-parent">
          <div className="component-child">
            <img className="mask-group-icon1" alt="" src={comp} />
          </div>
          <div className="txt_cat">Компютери</div>
        </div>
        </NavLink>

        <NavLink to='/televisions' className="nav-link"> 
        <div className="instance-parent">
          <div className="component-child">
            <img className="mask-group-icon2" alt="" src={tv} />
          </div>
          <div className="txt_cat">Телевизоры</div>
        </div>
        </NavLink>

        <NavLink to='/tablets' className="nav-link"> 
        <div className="instance-parent">
          <div className="component-child">
            <img className="mask-group-icon3" alt="" src={tablet} />
          </div>
          <div className="txt_cat">Планшеты</div>
        </div>
        </NavLink>

        <NavLink to='/columns' className="nav-link"> 
        <div className="instance-parent">
          <div className="component-child">
            <img className="mask-group-icon4" alt="" src={column} />
          </div>
          <div className="txt_cat">Колонки</div>
        </div>
        </NavLink>
      </div>
     </div>
     
   </>
     );
     }; 

     export default CatalogList;
