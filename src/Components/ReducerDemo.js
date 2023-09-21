import React, { useEffect } from "react";
import { useReducer, useState } from "react";
// import useFetchData from "../Hooks/useFetchData";

var initialState = { likes: 0, dislikes: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "like":
      return { likes: parseInt(state.likes) + 1, dislikes: state.dislikes };
    case "dislike":
      return { dislikes: parseInt(state.dislikes) + 1, likes: state.likes };
  }
}

function ReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [product, setProduct] = useState({});
  // const [data] = useFetchData("http://fakestoreapi.com/products/3")

  useEffect(() => {
    fetch("http://fakestoreapi.com/products/2")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  });

  function handleLikeClick() {
    dispatch({ type: "like" });
  }
  function handleDisLikeClick() {
    dispatch({ type: "dislike" });
  }

  return (
    <div className="container-fluid">
      {/* <h2>Likes Counter - [{state.likes}]</h2>
      <button
        className="form-control btn btn-primary mb-3"
        onClick={handleLikeClick}
      >
        Like
      </button>
      <button
        className="form-control btn btn-danger"
        onClick={handleDisLikeClick}
      >
        Dislike
      </button> */}
      <h2>Product Details</h2>
      <div className="card p-2" style={{ width: "200px" }}>
        <img src={product.image} className="card-img-top" height="160" />
        <div className="card-header">
          <p>{product.title}</p>
        </div>
        <div className="card-footer form-control me-3">
          <button onClick={handleLikeClick} className="btn btn-primary me-5">
            <span className="bi bi-hand-thumbs-up"></span> 
          </button>
          <button onClick={handleDisLikeClick} className="btn btn-danger">
            <span className="bi bi-hand-thumbs-down"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReducerDemo;
