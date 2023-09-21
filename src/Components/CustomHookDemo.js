import React from "react";
import useFetchData from "../Hooks/useFetchData";

function CustomHookDemo() {
  const data = useFetchData("http://fakestoreapi.com/products");
  
  return (
    <div className="container-fluid">
      <h2>Products list</h2>
      <ol>
        {/* {data.map((product) => {
          <li>{product.title}</li> */}
        {/* })} */}
      </ol>
    </div>
  );
}

export default CustomHookDemo;
