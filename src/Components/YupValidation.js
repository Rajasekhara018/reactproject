import React from "react";
import { Formik, useFormik } from "formik";
import * as yup from "yup";

function YupValidation() {
  const formik = useFormik({
    initialValues: {
      UserName: " ",
      Age: 0,
      Email: " ",
      Mobile: " ",
    },
    validationSchema: yup.object({
      UserName: yup
        .string()
        .required("User Name required")
        .min(10, "Name to short")
        .max(15, "Name too Long.."),
      Email: yup.string().required("Email required").email("Invalid Email"),
      Age: yup.number().required("Age is required"),
    }),
    onSubmit: (values) => {
      debugger;
      alert(JSON.stringify(values));
    },
  });
  return (
    <div className="contanier-fluid text-start col-3">
      <form onSubmit={formik.handleSubmit}>
        <h2>Register User</h2>
        <dl>
          <dt>
            <dt>User Name</dt>
            <dd>
              <input
                type="text"
                className="form-control"
                {...formik.getFieldProps("UserName")}
              />
            </dd>
            <dd className="text-danger">{formik.errors.UserName}</dd>
            <dt>Age</dt>
            <dd>
              <input
                type="text"
                className="form-control"
                {...formik.getFieldProps("Age")}
              />
            </dd>
            <dd className="text-danger">{formik.errors.Age}</dd>
            <dt>Email</dt>
            <dd>
              <input
                type="text"
                className="form-control"
                {...formik.getFieldProps("Email")}
              />
            </dd>
            <dd className="text-danger">{formik.errors.Email}</dd>
            {/* <dt>Mobile</dt>
          <dd>
            <input type="text" className="form-control" name="Mobile" onChange={formik.handleChange} />
          </dd> */}
            <dd>
              <button type="submit" className="btn btn-primary form-control">
                Register
              </button>
            </dd>
          </dt>
        </dl>
      </form>
    </div>
  );
}

export default YupValidation;
