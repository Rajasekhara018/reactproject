import React, { useEffect, useState } from "react";
import { useFormik, Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const IShopLogin = () => {
    // const [users, setUsers] = useState([]);
    const [Cookies, setCookie, removeCookie] = useCookies();
    const [users, setUsers] = useState();
    useEffect(()=>{
        debugger
        setUsers(Cookies["registerUsers"])
    })


  let navigate = useNavigate();
  function HandleButtonClick() {
    navigate("/register");
  }
  const LoginErrorMessagesSchema = yup.object().shape({
    loginEmail: yup
      .string()
      .required("email is required")
      .email("email is Invalid"),
    loginPassword: yup
      .string()
      .required("password is required")
      .min(8, "password should not be less than 8 chars")
      .matches(
        /^((?=(.*[\d0-9\@\&#\$\?\%!\|(){}[\]]){2,})(?=(.*[a-zA-Z]){2,}).{8,})$/
      ),
  });

  return (
    <div>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-5 mt-5">
            <div className="card p-3 m-5">
              <Formik
                initialValues={{
                  loginEmail: "",
                  loginPassword: "",
                }}
                validationSchema={LoginErrorMessagesSchema}
                onSubmit={(value) => {
                    debugger
                //   let userdetails = JSON.parse(
                //     localStorage.getItem("registerUsers")
                //   );
                  for(var user of users) {
                    if(user.regEmail == value.loginEmail){
                        setCookie("email", value.loginEmail);
                        navigate('/dashboard');
                        break;
                    } else {
                        navigate('/errorpage')
                        // setCookie("email", value.loginEmail);
                    }
                  }
                //   userdetails.forEach(element => {
                //     if(userdetails.regEmail === value.loginEmail){
                //         navigate('dashboard');
                //     } else {
                //         navigate('register')
                //     }
                    
                //   });

                //   alert(JSON.stringify(value));
                }}
              >
                {(field) => (
                  <Form action="">
                    <p>Log in to Facebook</p>
                    <div className="form-floating mb-3">
                      <Field
                        type="email"
                        className="form-control col-4"
                        id="floatingInput"
                        name="loginEmail"
                      />
                      <label for="floatingInput">Email addresss</label>
                      <dd className="text-danger">
                        <ErrorMessage name="loginEmail"></ErrorMessage>
                      </dd>
                    </div>
                    <div className="form-floating mb-3">
                      <Field
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        name="loginPassword"
                      />
                      <label for="floatingPassword">Password</label>
                      <dd className="text-danger">
                        <ErrorMessage name="loginPassword"></ErrorMessage>
                      </dd>
                    </div>
                    <div>
                      <button className="btn btn-primary form-control mb-3">
                        Sign in
                      </button>
                    </div>
                    <button
                      className="btn btn-link"
                      onClick={HandleButtonClick}
                    >
                      Sign up for Facebook
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IShopLogin;
