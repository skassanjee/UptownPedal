import React, {useState, useEffect, useSelector, useDispatch} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import  listProducts  from '../../redux/actions/productActions'

function HomeScreen(props) {



        const productList = useSelector(state => state.productList)
        const { products, loading, error } = productList;
        const dispatch = useDispatch();

        useEffect(() => {
               dispatch(listProducts())
                return () => {
                };
        }, [])

                return <div> 
                 <ul className="products">
{
  products.map(product => (

    <li key={products._id}>
    <div className="product">
        <img className="product-image" src={product.image} alt="product 1"/>
        <div className="product-name">
            <Link to={'/products/' + product._id}>{product.name}</Link>
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