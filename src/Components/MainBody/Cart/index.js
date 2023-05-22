import React from "react";
import "./index.css";
import cart from "../../Header/Logo/cart.png";

const Cart = ({ onToggleCart }) => {
  return (
    <div className="cart-modal">
      <div className="cart-modal-dialog">
        <div className="cart-modal-body">
          <p onClick={onToggleCart}>x</p>
          <div className="head-line">
            <h5 className="phone-num"> +91 1234567890</h5>
            <span className="cart">
              <img className="cart2" src={cart} alt={""} />
            </span>
            <span className="card-items" >  <h5> </h5> Items- $1600</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
