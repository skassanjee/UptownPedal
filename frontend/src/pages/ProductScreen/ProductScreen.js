import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../data'
import './ProductScreen.css'

function ProductScreen(props) {

    const product = data.products.find(x => x._id === props.match.params.id)
        return <div>
                <div className="back-to-result">
                    <Link to="/">Back to Results</Link>
                </div>
                <div className="details">
                    <div className="details-image">
                        <img src={product.image} alt="product"></img>
                    </div>

                    <div className="details-info">
                        <ul>
                            <li>
                                <h4>{product.name}</h4>
                            </li>
                            <li>
                                {product.rating} Stars ({product.numReviews}) Reviews)
                            </li>
                            <li>
                                <b> {product.price}</b>
                            </li>
                        <li>
                    Description:
                    <div className="description">
                            {product.description}
                        </div>
                        </li> 
                        </ul>
                    </div>
                    <div className="details-action">
                        <ul>
                            <li>
                                Price: <b>${product.price}</b>
                            </li>
                            <li>
                                Status: {product.status}
                            </li>
                            <li>
                                Qty: <select>
                                    <option>1</option>
                                </select>
                            </li>
                            <li>
                                <button className="button"> Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            <h1>{product.name}</h1>
        </div>
}

export default ProductScreen;