import React, { Component } from "react";
import CardComponent from "./CardComponent";
import CardClassComponent from "./CardClassComponent";
export class ShoppingClassDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: [],
      cartItems:[],
      Count:[]
    };
   this.handleCategoryChange = this.handleCategoryChange.bind(this);
   this.AddtoCart = this.AddtoCart.bind(this);

  }
   GetCartItemsCount() {
    this.Count(this.state.cartItems.length);
  }
  GetCategories() {
    fetch("http://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        data.unshift("all");
        this.setState({
          categories: data,
        });
      });
  }
  GetProducts(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          products: data,
        });
      });
  }
  handleCategoryChange(e){
    if (e.target.value == "all") {
      this.GetProducts("http://fakestoreapi.com/products");
    } else {
      this.GetProducts(
        `http://fakestoreapi.com/products/category/${e.target.value}`
      );
    }
    
  }
  AddtoCart(e){
    debugger
    fetch(`http://fakestoreapi.com/products/${e.target.id}`)
    .then((respone) => respone.json())
    .then((data) => {
      this.setState({
        cartItems: data,
      });
      this.GetCartItemsCount()
    });
  }
  componentDidMount(){
    this.GetCategories();
    this.GetProducts('http://fakestoreapi.com/products');
  }

  render() {
    return (
      <div className="container-fluid">
        <header className="bg-danger p-2 text-white text-center">
          <h2>
            <span className="bi bi-cart">Shopping Cart</span>
          </h2>
        </header>
        <section className="row">
          <nav className="col-3">
            <h2>Select Category</h2>
            <select className="form-select" onChange={this.handleCategoryChange}>
            {this.state.categories.map((Category) => (
              <option key={Category} value={Category}>
                {Category.toUpperCase()}
              </option>
            ))}
            </select>
          </nav>
          {/* <main
          className="col-6 d-flex flex-wrap overflow-auto"
          style={{ height: "600px" }}
        >
          {this.state.products.map((product) => (
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
                  onClick={this.AddtoCart}
                >
                  <span className="bi bi-cart4"></span>Add to cart
                </button>
              </div>
            </div>
          ))}
        </main> */}
           <main
          className="col-6 d-flex flex-wrap overflow-auto"
          style={{ height: "600px" }}
        >
          {this.state.products.map((product) => (
            <div
              key={product.id}
              className="m-2 p-2"
              style={{ width: "200px" }}
            >
              {/* <CardComponent  key={product.id} product={product} />
               */}
               <CardClassComponent  key={product.id} product={product} />
            </div>
          ))}
        </main>
        <aside className="col-3">
          <button className="btn btn-danger w-100">
            <span className="bi bi-cart3"></span>[{}] Your Cart Items
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
              {this.state.cartItems.map((item) => (
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
                    >
                      <span className="bi bi-trash"></span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tr>
                <th>Total</th>
                <td>{}</td>
              </tr>
          </table>
        </aside>
        </section>
      </div>
    );
  }
}

export default ShoppingClassDemo;
