import React, { useContext, useState } from "react";

var userDetailsContext = React.createContext(null);

function ContextDemo() {
  const [userDetails, setUserDeatils] = useState({
    userName: " ",
    Email: " ",
  });
  function HandleUser(e){
    setUserDeatils({
        userName: e.target.value,
        Email:userDetails.Email
    })
  }
  function HandleEmail(e){
    setUserDeatils({
        userName: userDetails.userName,
        Email:e.target.value
    })
  }
  function HandleUserData(){
    setUserDeatils({
        userName: userDetails.userName,
        Email:userDetails.Email
    })
  }

  return (
    <userDetailsContext.Provider value={userDetails}>
      <div className="container-fluid text-start">
        <h2>Site Index - {userDetails.userName}</h2>
        <dl>
        <dt>User Name</dt>
        <dd><input type="text" onChange={HandleUser} /></dd>
        <dt>Email </dt>
        <dd><input type="text" onChange={HandleEmail} /></dd>
      </dl>
      <button onClick={HandleUserData}>set Data</button>
        <HeaderComponent />
      </div>
    </userDetailsContext.Provider>
  );
}
function HeaderComponent() {
  const userDetails = useContext(userDetailsContext);
  return (
    <div
      className="bg-info text-white"
      style={{ height: "150px", padding: "10px" }}
    >
      <h2>Home -{userDetails.userName}</h2>
      <NavbarComponent />
    </div>
  );
}
function NavbarComponent() {
  const userDetails = useContext(userDetailsContext);
  return (
    <div className="btn-toolbar bg-danger text-white justify-content-between">
      <div className="btn-group">
        <button className="btn btn-group">Amazon</button>
      </div>
      <div className="btn-group">
        <button className="btn btn-group">{userDetails.Email} </button>
      </div>
    </div>
  );
}

export default ContextDemo;
