  import React from "react";
  import { Link } from "react-router-dom";
  import { UserContext, CartContext } from "../Context";
  import { useContext } from "react";

  function Header() {
    const linkStyle = {
      fontSize: "60px",
      color: '#1c838e',
      fontWeight: "bold",
    };
    const { checkCustomer, checkVendor } = useContext(UserContext);

    // eslint-disable-next-line no-unused-vars
    const { cartData, setCartData } = useContext(CartContext);
    if (cartData == null) {
      var cartItems = 0;
    } else {
      cartItems = cartData.length;
    }
    return (
      <>
        <style>
          {`
            .navbar-nav .nav-link, 
            .navbar-nav .dropdown-item {
              color: #1c838e !important;
            }
          `}
        </style>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container w-75">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand" style={linkStyle} to="/">
              <i className="fa-solid fa-shop" style={{ fontSize: '60px', color: '#1c838e' }}></i> The Virtual Vault
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                {!checkVendor &&
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      My Account
                    </a>
                    <ul className="dropdown-menu">
                      {checkCustomer != 'true' &&
                        <>
                          <li><Link className="dropdown-item" to="/customer/login">Login</Link></li>
                          <li><Link className="dropdown-item" to="/customer/register">Register</Link></li>
                        </>}
                      {checkCustomer == 'true' &&
                        <>
                          <li><Link className="dropdown-item" to="/customer/dashboard">Dashboard</Link></li>
                          <li><Link className="dropdown-item" to="/customer/logout">logout</Link></li>
                        </>
                      }
                    </ul>
                  </li>
                }
                {!checkCustomer &&
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Become a Seller
                    </a>
                    <ul className="dropdown-menu">
                      {checkVendor != 'true' &&
                        <>
                          <li><Link className="dropdown-item" to="/seller/login">Login</Link></li>
                          <li><Link className="dropdown-item" to="/seller/register">Register</Link></li>
                        </>}
                      {checkVendor == 'true' &&
                        <>
                          <li><Link className="dropdown-item" to="/seller/dashboard">Dashboard</Link></li>
                          <li><Link className="dropdown-item" to="/seller/logout">logout</Link></li>
                        </>
                      }
                    </ul>
                  </li>
                }
                {checkCustomer &&
                  <li className="nav-item">
                    <Link className="nav-link" to="/checkout">
                      My Cart ({cartItems})
                    </Link>
                  </li>
                }
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }

  export default Header;
