import React from "react";
import { useFormik, Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from "yup";

function YupValidationComponent() {
  return (
    <div className="contanier-fluid text-start col-3">
      <h2>Register Form</h2>
      <Formik
        initialValues={{
          UserName: "",
          Email: "",
          Age: "",
          City: "",
        }}
        validationSchema={yup.object({
          UserName: yup
            .string()
            .required("Username is required")
            .min(4, "username is too short..")
            .max(15, "username is too long"),
          Email: yup
            .string()
            .required("Email is required")
            .email("Invalid Email"),
          Age: yup
            .number()
            .required("Age is required")
            .min(2, "Age is too shprt"),
          City: yup.string(),
        })}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        {(fields) => 
          <Form>
            <div>
              <dl>
                <dt>User Name</dt>
                <dd>
                  <Field
                    type="text"
                    className="form-control"
                    name="UserName"
                  ></Field>
                </dd>
                <dd className="text-danger">
                  <ErrorMessage name="UserName"></ErrorMessage>
                </dd>
                <dt>Email</dt>
                <dd>
                  <Field
                    type="text"
                    className="form-control"
                    name="Email"
                  ></Field>
                </dd>
                <dd className="text-danger">
                  <ErrorMessage name="Email"></ErrorMessage>
                </dd>
                <dt>Age</dt>
                <dd>
                  <Field
                    type="text"
                    className="form-control"
                    name="Age"
                  ></Field>
                </dd>
                <dd className="text-danger">
                  <ErrorMessage name="Age"></ErrorMessage>
                </dd>
                <dt>City</dt>
                <dd>
                  <Field as="select" className="form-control" name="City">
                    <option>Delhi</option>
                    <option>chennai</option>
                    <option>Hyderabad</option>
                  </Field>
                </dd>
                <dd className="text-danger">
                  <ErrorMessage name="City"></ErrorMessage>
                </dd>
              </dl>
              <button
                type="submit"
                className="btn btn-primary form-control"
                disabled={fields.isValid ? false : true}
              >
                Register
              </button>
            </div>
          </Form>
        }
      </Formik>
    </div>
  );
}

export default YupValidationComponent;
