import React from "react";
import logo_dark from "../../logo_dark.svg";

import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer-bg">
      <img className="footer--logo" src={logo_dark} alt="Logo" />
      <div className="footer--container">
        <div className="categories__container">
          <h3>Categories</h3>
          <p>Women</p>
          <p>Men</p>
          <p>All Products</p>
        </div>

        <div className="help">
          <h3>Help</h3>
          <p>Shipping</p>
          <p>Returns</p>
          <p>FAQ's</p>
        </div>

        <div>
          <h2>GET IN TOUCH</h2>
          <p className="get-intouch-p">
            Any questions? Let us know by calling us with this number (+234)
            8064787395
          </p>
        </div>

        <div>
          <h2>NEWSLETTER</h2>
          <form className="form">
            <input
              type="text"
              name=""
              className="footer-form-input"
              placeholder="mail@marv.com"
              required
            />
            <button className="button blue-button">Subscribe</button>
          </form>
        </div>
      </div>
      <p className="footer--copy-text">
        Copyright ©2019 All rights reserved | Designed by Roosevelt Innocent
      </p>
    </div>
  );
}
