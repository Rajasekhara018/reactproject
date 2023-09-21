import React from "react";
import { Formik, useFormik } from "formik";

function FormikComponent() {
  const formik = useFormik({
    initialValues: {
      UserName: "",
      Password: "",
      City: "",
      SubScribe:true
    },
    onSubmit: values => {
      alert(JSON.stringify(values));

    }
  });
  return (
    <div className="contanier-fluid text-start col-3">
      <form onSubmit={formik.handleSubmit}>
        <h2> Register user</h2>
        <dl>
          <dt>User Name</dt>
          <dd>
            <input
              type="text"
              className="form-control"
              name="UserName"
              value={formik.values.UserName}
              onChange={formik.handleChange}
            />
          </dd>
          <dt>Password</dt>
          <dd>
            <input
              type="password"
              className="form-control"
              name="Password"
              value={formik.values.Password}
              onChange={formik.handleChange}
            />
          </dd>
          <dt>City</dt>
          <dd>
            <select
              className="form-select"
              name="City"
              value={formik.values.City}
              onChange={formik.handleChange}
            >
              <option>Delhi</option>
              <option>Chennai</option>
              <option>Hyderabad</option>
            </select>
          </dd>
            <dt>SubScribe</dt>
            <dd className="form-switch"> <input type="checkbox" className="form-check-input"  name="SubScribe" checked={formik.values.SubScribe}
              onChange={formik.handleChange} />   </dd>
          <dd>
            <button type="submit" className="btn btn-primary form-control">Register</button>
          </dd>
        </dl>
      </form>
    </div>
  );
}

export default FormikComponent;
