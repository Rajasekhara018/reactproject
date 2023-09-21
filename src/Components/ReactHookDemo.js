import React from "react";
import { useState, useEffect } from "react";

function ReactHookDemo() {
  const [msg, setMsg] = useState();

  function handleSuccessClick() {
    setMsg(<SuccessComponent />);
  }
  function handleErrorClick() {
    setMsg(<ErrorComponent />);
  }

  return (
    <div className="container-fluid text-start m-3">
      <button className="btn btn-success  me-3" onClick={handleSuccessClick}>Success</button>
      <button className="btn btn-danger" onClick={handleErrorClick}>Invalid</button>
      <hr />
      <div>{msg}</div>
    </div>
  );
}

function SuccessComponent() {
  useEffect(() => {
    alert("Success Component will Mount");
    return () => {
      alert("Success component will unmount");
    };
  });
  return (
    <div>
      <h2>Login Success....</h2>
    </div>
  );
}
function ErrorComponent() {
  useEffect(() => {
    alert("Error Component will Mount");
    return () => {
      alert("Error component will unmount");
    };
  });
  return (
    <div>
      <h2>Invalid Credentials....</h2>
    </div>
  );
}

export default ReactHookDemo;
