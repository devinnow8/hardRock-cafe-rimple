import React from "react";
import cart from "../../Header/Logo/cart.png";
import "./index.css";

const Cart = ({
  selectedItems,
  onToggleRemoveItem,
  onToggleCart,
  onClearCart,
  onCheckout,
}) => {
  const calculateTotal = () => {
    let total = 0;
    selectedItems.forEach((item) => {
      total += item.price * item.count;
    });
    return total;
  };

  return (
    <div className="cart-modal">
      <div className="cart-modal-dialog">
        <div className="close-button" onClick={onToggleCart}>
          x
        </div>
        <div className="cart-modal-body">
          <div className="head-line">
            <h5 className="phone-num">+91 1234567890</h5>
            <span></span>
            <span className="cart">
              <img className="cart2" src={cart} alt="" />
            </span>
            <span className="card-items">
              <h5>{selectedItems.length}</h5> Items - ${calculateTotal()}
            </span>
          </div>
          <div className="cart-items">
            {selectedItems.map((item) => (
              <div key={item.id} className="item">
                <img src={item.image} alt={item.title} />
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                  <h6>
                    {" "}
                    Quantity : {item.count} x {item.price}{" "}
                  </h6>
                  <button onClick={() => onToggleRemoveItem(item)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-footer">
            <h4>Total: ${calculateTotal()}</h4>
            <div className="buttons">
              <button onClick={onClearCart}>Clear Cart</button>
              <button onClick={onCheckout}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
