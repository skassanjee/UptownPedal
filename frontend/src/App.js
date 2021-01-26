import './App.css';
import data from './data'
import bike from './images/d1.jpg'

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  }

  const closemenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (

  <BrowserRouter>
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
            <a href="index.html"> Uptown Pedal</a>
            </div>
            <div className="header-links">
                <a href="signin">Sign in</a>
                <a href="cart.html">Cart </a>
            </div>
        </header>

        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closemenu}>X</button>
            <ul>
                <li>
                    <a href="index.html">Bicycles</a>
                </li> 

                <li>
                    <a href="index.html">Tires</a>
                </li> 
            </ul>
        </aside>

        <main className="main">
            <div className="content">


              <Route path="/products/:id" component={ProductScreen} />
              <Route path="/" exact={true} component={HomeScreen} />
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

        </main>
        <footer className="footer">
            All rights reserved.
        </footer>


    </div>
  </BrowserRouter>  
  );
}

export default App;
