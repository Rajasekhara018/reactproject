import React from "react";
import {  useFormik } from "formik";

function FormikValidation() {

  function VerifyUserDetails(userDetails){
    const errors = {};
    if(userDetails.UserName === " "){
        errors.UserName = "User Name is Required";
    } else if(userDetails.UserName.length < 4){
        errors.UserName = "User Name is too short...";
    } else if(userDetails.UserName.length > 10){
        errors.UserName = "User Name is too long...";
    }
    if(userDetails.Age === " "){
        errors.Age = "Age is Required";
    } else if(isNaN(userDetails.Age)){
        errors.Age = "Age must be a number";
    } else if(userDetails.Age.length > 2){
        errors.Age = "Age is too high...";
    }
    if(userDetails.Email === " "){
        errors.Email = "Email is Required";
    } else if(userDetails.Email.indexOf("@") <= 2){
        errors.Email = " Invalid Email";
    } else if(userDetails.Email.match(/(?=.*[A-Z])\w{4,10}/)){
        errors.Email = "Strong Email";
    }
    if(userDetails.Mobile === " "){
        errors.Mobile = "Mobile is Required";
    } else if(userDetails.Mobile.match(/\+91\d{10}/)){
        errors.Mobile = " ";
    } else {
        errors.Mobile = "Invalid Mobile"
    }
    return errors;
  }

  const formik = useFormik({
    initialValues: {
        UserName:' ',
        Age:0,
        Email:' ',
        Mobile:' '
    },
    validate: VerifyUserDetails,
    onSubmit: values => {
        debugger
        alert(JSON.stringify(values))
    }   
  });
  return (
    <div className="contanier-fluid text-start col-3">
      <form onSubmit={formik.handleSubmit}>
        <h2>Register User</h2>
        <dl>
          <dt>
            <dt>User Name</dt>
            <dd>
              <input type="text" className="form-control" name="UserName" value={formik.values.UserName} onChange={formik.handleChange} />
            </dd>
            <dd className="text-danger">{formik.errors.UserName}</dd>
            <dt>Age</dt>
            <dd>
              <input type="text" className="form-control" name="Age" value={formik.values.Age}  onChange={formik.handleChange} />
            </dd>
            <dd className="text-danger">{formik.errors.Age}</dd>
            <dt>Email</dt>
            <dd>
              <input type="text" className="form-control" name="Email" value={formik.values.Email}  onChange={formik.handleChange} />
            </dd>
            <dd className="text-danger">{formik.errors.Email}</dd>
            <dt>Mobile</dt>
            <dd>
              <input type="text" className="form-control" name="Mobile" value={formik.values.Mobile}  onChange={formik.handleChange} />
            </dd>
            <dd className="text-danger">{formik.errors.Mobile}</dd>
            <dd>
              <button type="submit" className="btn btn-primary form-control">Register</button>
            </dd>
          </dt>
        </dl>
      </form>
    </div>
  );
}

export default FormikValidation;
