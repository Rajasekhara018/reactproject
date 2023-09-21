import React from "react";
import { useFormik, Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from "yup";
import { BrowserRouter, useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const IShopRegister = () => {
    let RegisterArray = new Array();
    const [Cookies, setCookie, removeCookie] = useCookies();
  let navigate = useNavigate();
  function HandleButtonClick() {
    navigate("/login");
  }

  const RegisterErrorMessagesSchema = yup.object().shape({
    regName: yup
      .string()
      .required("username is required")
      .min(10, "username should not be less than 10 chars")
      .max(15, "username is should not be greater than 15 chars")
      .matches(/[A-Za-z]([A-Za-z](\\s|\\.|_)*?)+[a-zA-Z]*$/),
    regEmail: yup
      .string()
      .required("email is required")
      .email("email is Invalid"),
    regMobile: yup
      .number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      // .min(10, "A phone number should not be less than 10 digits")
      // .max(10, "A phone number must be 10 digits")
      .required("A phone number is required"),
    regPassword: yup
      .string()
      .required("password is required")
      .min(8, "password should not be less than 8 chars")
      .matches(
        /^((?=(.*[\d0-9\@\&#\$\?\%!\|(){}[\]]){2,})(?=(.*[a-zA-Z]){2,}).{8,})$/
      ),
    regConfirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("regPassword"), null], "password must match"),
  });
  return (
    <div>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-5 mt-5">
            <div className="card p-3 m-5">
              <Formik
                initialValues={{
                  regName: "",
                  regEmail: "",
                  regMobile: "",
                  regPassword: "",
                  regConfirmPassword: "",
                  regSubscription: "",
                }}
                validationSchema={RegisterErrorMessagesSchema}
                onSubmit={(value) => {
                  debugger;
                //   alert(JSON.stringify(value));
                RegisterArray.push(JSON.stringify(value))
                setCookie("registerUsers", RegisterArray)
                //   localStorage.setItem("registerUsers", JSON.stringify(value));
                  navigate("/login");
                }}
              >
                {(field) => (
                  <div>
                    <Form>
                      <h2>Create a new account</h2>
                      <p>It's quick and easy.</p>
                      <hr />
                      <div className="form-floating mb-3">
                        <Field
                          className="form-control col-4"
                          id="floatingInput"
                          name="regName"
                        />
                        <label for="floatingInput">Name</label>
                        <dd className="text-danger">
                          <ErrorMessage name="regName"></ErrorMessage>
                        </dd>
                      </div>
                      <div className="form-floating mb-3">
                        <Field
                          className="form-control col-4"
                          id="floatingInput"
                          name="regEmail"
                          type="email"
                        />
                        <label for="floatingInput">Email addresss</label>
                        <dd className="text-danger">
                          <ErrorMessage name="regEmail"></ErrorMessage>
                        </dd>
                      </div>
                      <div className="form-floating mb-3">
                        <Field
                          className="form-control col-4"
                          id="floatingInput"
                          name="regMobile"
                        />
                        <label for="floatingInput">Mobile Number</label>
                        <dd className="text-danger">
                          <ErrorMessage name="regMobile"></ErrorMessage>
                        </dd>
                      </div>
                      <div className="form-floating mb-3">
                        <Field
                          className="form-control"
                          id="floatingPassword"
                          name="regPassword"
                          type="password"
                        />
                        <label for="floatingPassword">Password</label>
                        <dd className="text-danger">
                          <ErrorMessage name="regPassword"></ErrorMessage>
                        </dd>
                      </div>
                      <div className="form-floating mb-3">
                        <Field
                          className="form-control"
                          id="floatingPassword"
                          name="regConfirmPassword"
                          type="password"
                        />
                        <label for="floatingPassword">Confirm Password</label>
                        <dd className="text-danger">
                          <ErrorMessage name="regConfirmPassword"></ErrorMessage>
                        </dd>
                      </div>
                      {/* <div>
                        <dt>SubScribe</dt>
                        <dd className="form-switch">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="regSubscribe"
                          />
                        </dd>
                      </div> */}
                      <div>
                        <button
                          className="btn btn-success form-control mb-3"
                          disabled={field.isValid ? false : true}
                        >
                          Register
                        </button>
                      </div>
                      <button
                        className="btn btn-link"
                        onClick={HandleButtonClick}
                      >
                        Already have an account?
                      </button>
                    </Form>
                  </div>
                )}
              </Formik>
            </div>
          </div>
          {/* <Link to="/login">Existing User</Link> */}
        </div>
      </div>
    </div>
  );
};

export default IShopRegister;
