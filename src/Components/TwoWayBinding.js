import React from "react";
import { useState } from "react";

function TwoWayBinding() {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    city: "",
    stock: false,
  });
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    city: "",
    stock: false,
  });
  function handleName(e) {
    setProduct({
      name: e.target.value,
      price: product.price,
      city: product.city,
      stock: product.stock,
    });
  }
  function handlePrice(e) {
    setProduct({
      name: product.name,
      price: e.target.value,
      city: product.city,
      stock: product.stock,
    });
  }
  function handleCity(e) {
    setProduct({
      name: product.name,
      price: product.price,
      city: e.target.value,
      stock: product.stock,
    });
  }
  function handleStock(e) {
    debugger;
    setProduct({
      name: product.name,
      price: product.price,
      city: product.city,
      stock: e.target.checked,
    });
  }
  function handleRegister() {
    setNewProduct({
      name: product.name,
      price: product.price,
      city: product.city,
      stock: product.stock,
    });
    let values = [];
    values.push(
      newProduct.name,
      newProduct.price,
      newProduct.city,
      newProduct.stock
    );
    localStorage.setItem("registerData", values);
  }

  return (
    <div className="container-fluid text-start">
      <div className="row">
        <div className="col-3">
          <h2>Register Product</h2>
          <dl>
            <dt> Name </dt>
            <dd>
              <input
                type="text"
                className="form-control"
                onChange={handleName}
              />
            </dd>
            <dt> Price </dt>
            <dd>
              <input
                type="text"
                className="form-control"
                onChange={handlePrice}
              />
            </dd>
            <dt> City </dt>
            <dd>
              <select className="form-select" onChange={handleCity}>
                <option>Delhi</option>
                <option>Hyderabad</option>
                <option>Chennai</option>
              </select>
            </dd>
            <dd>Stock</dd>
            <dd className="form-check">
              <input
                onChange={handleStock}
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label">Available</label>
            </dd>
          </dl>
          <button className="btn btn-primary w-100" onClick={handleRegister}>
            Register
          </button>
        </div>
        <div className="col-9">
          <h2>Product Details</h2>
          <dl>
            <dt>Name</dt>
            <dd>{newProduct.name}</dd>
            <dt>Price</dt>
            <dd>{newProduct.price}</dd>
            <dt>City</dt>
            <dd>{newProduct.city}</dd>
            <dt>Stock</dt>
            <dd>{newProduct.stock == true ? "Available" : "Out of Stock"}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default TwoWayBinding;
