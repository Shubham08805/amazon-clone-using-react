import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";

function Header() {  
  return (
    <div className="header">
      
       <Link to="/"><img className="header-logo" alt="" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" /></Link>
       <span class="in">.in</span>    
       <div id="address">
              <span class="hello" id="hello">Hello</span><br />
              <img src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png" style={{ height: "20px", width: "20px", }} alt="" />
              <span class="select-address" id="select-address">Select your address</span>
        </div>

        <div className="header-search">
          <input className="header-searchInput" type="text" />
          <SearchIcon className="header-searchIcon" />
        </div>

        <div className="header-nav">
        <div className="header-option">
          <Link to="/SignIn">
            <span className="header-element1">Hello Guest</span><br/>
            <span className="header-element2">Sign In</span>
          </Link>
          </div>
    
        <div className="header-option">
          <Link to="/SignIn">
            <span className="header-element1">Returns</span><br />
            <span className="header-element2">& Orders</span>
          </Link>
          </div>
        
        <div className="header-option">
          <Link to="/SignIn">
            <span className="header-element1">Your</span><br />
            
            <span className="header-element2">Prime</span>
          </Link>
        </div>

        
        <div className="header-optionBasket">
          <Link to="/Cart"><ShoppingBasketIcon style={ {color:"white"}} /></Link>
            
            <span className="header-element2 header-basketCount">
              0
            </span>
          </div>
        
      </div>
    </div>
  );
}

export default Header;
