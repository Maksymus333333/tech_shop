import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CategoriesPopup.css';

const CategoriesPopup = ({ togglePopup }) => {
  // State for categories, subcategories, products, and selected category/subcategory
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const navigate = useNavigate();

   // Fetch categories on component mount
  useEffect(() => {
    axios.get('http://localhost/my-store-api/api.php/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

   // Handle hovering over a category
  const handleCategoryHover = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedSubCategory(null);
    // Fetch subcategories based on the selected category
    axios.get(`http://localhost/my-store-api/api.php/subcategories/${categoryId}`)
      .then(response => setSubCategories(response.data))
      .catch(error => console.error('Error fetching subcategories:', error));
  };

   // Handle hovering over a subcategory
  const handleSubCategoryHover = (subCategoryId) => {
    setSelectedSubCategory(subCategoryId);
       // Fetch products based on the selected subcategory
    axios.get(`http://localhost/my-store-api/api.php/products/${subCategoryId}`)
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  };

    // Handle clicking on a category
  const handleCategoryClick = (categoryName) => {
    const categoryRoutes = {
      'Smartphones': '/smartphones',
      'Laptops': '/laptops',
      'Columns': '/columns',
      'Computers': '/computers',
      'Televisions': '/televisions',
      'Tablets': '/tablets'
    };

      // Handle clicking on a product
    const route = categoryRoutes[categoryName];
    if (route) {
      navigate(route);
      togglePopup();
    }
  };

    // Handle clicking outside the popup to close it
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
    togglePopup();
  };

  const handlePopupClick = (e) => {
    // Перевірка, чи клік відбувся всередині попапу
    if (!e.target.closest('.popup')) {
      // Якщо клік відбувся поза попапом, закрити попап
      togglePopup();
    }
  };

  return (
    <div>
      <div className="overlay_" onClick={togglePopup} />
      <div className="popup" onClick={handlePopupClick}>
        <div className="columns">
             {/* Category list */}
          <div className="column">
            <ul>
              {categories.map((category) => (
                <li
                  key={category.id}
                  className={`category ${selectedCategory === category.id ? 'active' : ''}`}
                  onMouseEnter={() => handleCategoryHover(category.id)}
                  onClick={() => handleCategoryClick(category.name)}
                >
                  <span>{category.name}</span>
                  <span> &gt;</span>
                </li>
              ))}
            </ul>
          </div>
               {/* Subcategory list */}
          <div className="column">
            {selectedCategory && (
              <ul>
                {subCategories.map((subCategory) => (
                  <li
                    key={subCategory.id}
                    className={`sub-category ${selectedSubCategory === subCategory.id ? 'active' : ''}`}
                    onMouseEnter={() => handleSubCategoryHover(subCategory.id)}
                  >
                    <span>{subCategory.name}</span>
                    <span> &gt;</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
             {/* Product list */}
          <div className="column">
            {selectedSubCategory && (
              <ul>
                {products.map((product) => (
                  <li
                    key={product.id}
                    className="products"
                    onClick={() => handleProductClick(product.id)}
                  >
                    {product.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPopup;
