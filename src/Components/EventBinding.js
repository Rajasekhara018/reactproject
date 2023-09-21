import React from "react";
import { useState } from "react";

function EventBinding() {
  const [userName, setUserName] = useState("John");
  function handleUserName(e) {
    setUserName(e.target.value);
  }
  return (
    <div className="container-fluid">
      <dl>
        <dt>User Name</dt>
        <dd>
          <input type="text" value={userName} onBlur={handleUserName()} />
        </dd>
      </dl>
      <h3> Hello! {userName}</h3>
    </div>
  );
}

export default EventBinding;
