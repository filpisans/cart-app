import React, { useState } from "react";

export const SingleProduct = (props) => {
  const { id, name, price, onShowProduct, onCalculateTotal, onDeleteProduct } =
    props;

  const [quantity, setQuantity] = useState(0);

  const buy = () => {
    onCalculateTotal(price * quantity);
  };

  return (
    <>
      <span>{id}</span>
      <h3>{name}</h3>
      <p>Price: $ {price}</p>
      <input
        type="number"
        min="0"
        onChange={(e) => setQuantity(e.target.value)}
      ></input>
      <button onClick={buy}>Buy</button>
      <button onClick={() => onShowProduct(name)}>Show</button>
      <button onClick={() => onDeleteProduct(id)}>Delete</button>
      <h4>Subtotal: {price * quantity}</h4>
      <hr />
    </>
  );
};
export default SingleProduct;
