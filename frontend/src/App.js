import './App.css';
import data from './data'
import bike from './images/d1.jpg'
import HomeScreen from './pages/HomeScreen/HomeScreen'
import ProductScreen from './pages/ProductScreen/ProductScreen'
import { BrowserRouter, Route, Link } from 'react-router-dom'
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
                <Link to="/">
                  Uptown Pedal
                  </Link>            </div>
            <div className="header-links">
                <a href="signin">Sign in</a>
                <a href="cart.html">dCart </a>
            </div>
        </header>

        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closemenu}>X</button>
            
        </aside>

        <main className="main">
            <div className="content">


              <Route path="/products/:id" component={ProductScreen} />
              <Route path="/" exact={true} component={HomeScreen} />
               
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
