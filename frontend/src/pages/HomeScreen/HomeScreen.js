import React from 'react'
import data from '../../data'

function HomeScreen(props) {
        return <div> 
                 <ul className="products">


{
  data.products.map(product => (
    <li>
    <div className="product">
        <img className="product-image" src={product.image} alt="product 1"/>
        <div className="product-name">
            <a href="/products.html">{product.name}</a>
        </div>
        <div className="product-brand">{product.brand}</div>
        <div className="product-price">${product.price}</div> 
        <div className="product-rating">{product.rating} Stars ({product.numReviews} reviews)</div> 
        </div>

</li>
  ))
}
        
</ul>
        </div>
}

export default HomeScreen;