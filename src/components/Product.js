import React, { useState } from "react";
import ProductForm from "./ProductForm";
import SingleProduct from "./SingleProduct";

const Total = (props) => {
  const { totalCash } = props;
  return <h3>Total Cash: {totalCash}</h3>;
};

const ProductList = () => {
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([
    { id: 1, name: "Android", price: 100 },
    { id: 2, name: "Apple", price: 200 },
    { id: 3, name: "Nokia", price: 300 },
  ]);
  const calculateTotal = (price) => {
    setTotal(total + parseInt(price));
  };

  const showProduct = (name) => {
    alert("you selected " + name);
  };

  const deleteProduct = (id) => {
    const result = products.filter((product) => product.id !== id); //filtreaza cu cele diferite de id
    setProducts(result);
  };

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const resetTotal = () => {
    if (total !== 0) {
      setTotal(0);
    }
  };

  return (
    <div className="container-sm" style={{ padding: 20 }}>
      <ProductForm index={products.length + 1} onCreateProduct={addProduct} />
      {products.map((p) => (
        <SingleProduct
          id={p.id}
          name={p.name}
          price={p.price}
          onCalculateTotal={calculateTotal}
          onShowProduct={showProduct}
          onDeleteProduct={deleteProduct}
        />
      ))}

      <Total totalCash={total} />
      <button
        onClick={resetTotal}
        style={{ display: total ? "block" : "none" }}
      >
        Reset
      </button>
    </div>
  );
};

export default ProductList;
