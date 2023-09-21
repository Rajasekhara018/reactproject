import React from "react";
import { useState, useEffect } from "react";

function Category() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  let [Amount, TotalAmount] = useState([]);

  function GetCartItemsCount() {
    setItemsCount(cartItems.length);
  }
  function GetTotalAmount() {
    TotalAmount(Amount++);
  }

  function LoadCategories() {
    fetch("http://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        data.unshift("all");
        setCategories(data);
      });
  }

  function LoadProducts(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }
  function handleCategoryChange(e) {
    debugger;
    if (e.target.value == "all") {
      LoadProducts("http://fakestoreapi.com/products");
    } else {
      LoadProducts(
        `http://fakestoreapi.com/products/category/${e.target.value}`
      );
    }
  }
  function handleAddtoCart(e) {
    fetch(`http://fakestoreapi.com/products/${e.target.id}`)
      .then((respone) => respone.json())
      .then((data) => {
        cartItems.push(data);
        GetCartItemsCount();
        Amount = data.price;
        GetTotalAmount();

        // console.log(data);
      });
    // alert(cartItems.length);
  }
  function HandleDelete(e) {
    debugger;
    let index = e.target.id;
    // let numberOfElementsToRemove = 1;
    cartItems.pop(index);
    GetCartItemsCount();
  }

  useEffect(() => {
    LoadCategories();
    LoadProducts("http://fakestoreapi.com/products");
  }, [cartItems.length]);

  return (
    <div className="container-fluid">
      <header className="bg-danger text-white text-center p-2">
        <h1>
          <span className="bi bi-cart"></span> Shopping Home
        </h1>
      </header>
      <section className="row mt-3">
        <nav className="col-2">
          <div>
            <label>Select Category</label>
          </div>
          <select className="form-select" onChange={handleCategoryChange}>
            {categories.map((Category) => (
              <option key={Category} value={Category}>
                {Category.toUpperCase()}
              </option>
            ))}
          </select>
        </nav>
        <main
          className="col-6 d-flex flex-wrap overflow-auto"
          style={{ height: "600px" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="card m-2 p-2"
              style={{ width: "200px" }}
            >
              <img src={product.image} className="card-img-top" height="250" />
              <div className="card-header" style={{ height: "120px" }}>
                <p> {product.title}</p>
              </div>
              <div className="card-body">
                <dl>
                  <dt>price</dt>
                  <dd>{product.price}</dd>
                  <dt>
                    <span className="bi bi-star-fill text-success"></span>
                    {product.rating.rate} <span>[{product.rating.count}]</span>
                  </dt>
                </dl>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger w-100"
                  id={product.id}
                  onClick={handleAddtoCart}
                >
                  <span className="bi bi-cart4"></span>Add to cart
                </button>
              </div>
            </div>
          ))}
        </main>
        <aside className="col-4">
          <button className="btn btn-danger w-100">
            <span className="bi bi-cart3"></span>[{itemsCount}] Your Cart Items
          </button>
          <table className="table table-hover overflow-auto">
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Preview</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    <img src={item.image} width="50" height="50" />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      id={item.id}
                      onClick={HandleDelete}
                    >
                      <span className="bi bi-trash"></span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tr>
                <th>Total</th>
                <td>{Amount}</td>
              </tr>
          </table>
        </aside>
      </section>
    </div>
  );
}

export default Category;
