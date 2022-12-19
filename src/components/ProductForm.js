import React, { useState } from "react";

export const ProductForm = (props) => {
  const { index, onCreateProduct } = props;
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const createProduct = (event) => {
    event.preventDefault();
    if (name === "" && price === "") {
      alert("please fill the fields!");
    } else {
      const product = { id: index, name, price };
      onCreateProduct(product);
      setName("");
      setPrice("");
    }
  };

  return (
    <form>
      <label>Product Name </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />

      <label>Product Price </label>
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <br />

      <button onClick={createProduct}>Create</button>
      <hr />
    </form>
  );
};

export default ProductForm;
