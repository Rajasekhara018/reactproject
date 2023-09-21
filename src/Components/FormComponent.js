import React, { useState } from "react";

function FormComponent() {
  const [users] = useState([
    { userId: "john" },
    { userId: "david" },
    { userId: "vishnu" },
    { userId: "Ajay" },
  ]);
  const [userMsg, setUserMsg] = useState("");
  const [isUserValid, setUserValid] = useState(false);
  const [pwdMsg, setPwdMsg] = useState("");
  const [capStatus, setcapStatus] = useState(false);
  const [cityMsg, setCityMsg] = useState('');

  function VerifyUserId(e) {
    for (var user of users) {
      if (user.userId == e.target.value) {
        setUserMsg("User Id Taken - Try Another");
        setUserValid(false);
        break;
      } else {
        setUserMsg("User Id Available");
        setUserValid(true);
      }
    }
  }
  function verifyPassword(e) {
    if (e.target.value.match(/(?=.*[A-Z])\w{4,10}/)) {
      setPwdMsg("Strong Password");
    } else {
      if (e.target.value.length < 4) {
        setPwdMsg("Poor Password");
      } else {
        setPwdMsg('Week Password')
      }
    }
  } 
  function verifyCaps(e){
    if(e.which >= 65 && e.which <= 90 || e.keyCode >= 65 && e.keyCode <= 90){
        setcapStatus(true);
    } else {
        setcapStatus(false);
    }

  }
  function verifyCity(e){
    if(e.target.value == "null"){
      setCityMsg('Select Valid City')
    } else {
    //   setCityMsg('Valid City')
    }

  }
  function HideUserMsg(e) {
    if(e.target.value ==""){
        setUserMsg("User Id Required");
    } else {
        setUserMsg("");
    }
  }
  function HidePwdMsg(e) {
    setPwdMsg("");
  }
  return (
    <div className="container-fluid">
      <h2>Register User</h2>
      <dl>
        <dt>User Id</dt>
        <dd>
          <input type="text" onKeyUp={VerifyUserId} onBlur={HideUserMsg} />
        </dd>
        <dd className={isUserValid == true ? "text-success" : "text-danger"}>
          {userMsg}
        </dd>
        <dt>Password</dt>
        <dd>
          <input type="password" onKeyPress={verifyCaps} onKeyUp={verifyPassword} onBlur={HidePwdMsg}  />
        </dd>
        <dd>{pwdMsg}</dd>
        <dd className={(capStatus == true) ? 'd-block' : 'd-none'}>
            <span className="text-warning">
            <span className="bi bi-exclamation-triangle"></span>CAPS ON
            </span>
        </dd>
        <dd>
            <select onChange={verifyCity}>
                <option value="null">Select Your City</option>
                <option value="Delhi">Delhi</option>
                <option value="Hyd">Hyd</option>
            </select>
        </dd>
        <dd className="text-danger">{cityMsg}</dd>
      </dl>
    </div>
  );
}

export default FormComponent;
