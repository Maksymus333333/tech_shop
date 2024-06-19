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
     {/* Container for smartphone catalog header */}
    <div className="smartphone">
    <div className="cat">Catalog</div>
   </div>   


      {/* Container for catalog list */}
    <div className="catalogl">     
      <div className="card">
        
      {/* Link to smartphones catalog */}
      <NavLink to='/smartphones' className="nav-link">
        <div className="instance-parent">
          <div className="component-child">
            <img className="mask-group-iconp" alt="" src={phone} />
          </div>
          <div className="txt_cat">Smartphones</div>
        </div>
        </NavLink>

          {/* Link to laptops catalog */}
        <NavLink to='/laptops' className="nav-link">
        <div className="instance-parent">
          <div className="component-child">
            <img className="mask-group-icon" alt="" src={laptop} />
          </div>
          <div className="txt_cat">Laptops</div>
        </div>
        </NavLink>

         {/* Link to computers catalog */}
        <NavLink to='/computers' className="nav-link"> 
        <div className="instance-parent">
          <div className="component-child">
            <img className="mask-group-icon1" alt="" src={comp} />
          </div>
          <div className="txt_cat">Computers</div>
        </div>
        </NavLink>

         {/* Link to televisions catalog */}
        <NavLink to='/televisions' className="nav-link"> 
        <div className="instance-parent">
          <div className="component-child">
            <img className="mask-group-icon2" alt="" src={tv} />
          </div>
          <div className="txt_cat">Televisions</div>
        </div>
        </NavLink>

           {/* Link to tablets catalog */}
        <NavLink to='/tablets' className="nav-link"> 
        <div className="instance-parent">
          <div className="component-child">
            <img className="mask-group-icon3" alt="" src={tablet} />
          </div>
          <div className="txt_cat">Tablets</div>
        </div>
        </NavLink>

       {/* Link to columns catalog */}
        <NavLink to='/columns' className="nav-link"> 
        <div className="instance-parent">
          <div className="component-child">
            <img className="mask-group-icon4" alt="" src={column} />
          </div>
          <div className="txt_cat">Columns</div>
        </div>
        </NavLink>
      </div>
     </div>
     
   </>
     );
     }; 

     export default CatalogList;
