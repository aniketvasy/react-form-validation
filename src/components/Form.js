import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import { signUpSchemas } from "../schemas";

const Form = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    mobileNumber: "",
    gender: "",
    password: "",
    confirmPassword: "",
  };

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchemas,
    onSubmit: (values) => {
      console.log("submited Data", values);
    },
  });

  console.log("Errors", errors);
  // console.log(values);

  // const [userRegistration, setUserRegistration] = useState({
  //   firstName: "",
  //   lastName: "",
  //   userName: "",
  //   email: "",
  //   mobileNumber: "",
  //   gender: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  // const handleInput = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setUserRegistration({ ...userRegistration, [name]: value });
  //   console.log(userRegistration);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <>
      <div className="form-comp" onSubmit={handleSubmit}>
        <form action="" className="form">
          {/* first name and last name */}

          <div className="input-row">
            <div className="input-group">
              <label
                className="float-label label-firstName"
                htmlFor="firstName"
              >
                First Name *
              </label>
              {errors && (
                <div className="error-comp">
                  <p className="error">{errors.firstName}</p>
                </div>
              )}
              <input
                type="text"
                autoComplete="off"
                name="firstName"
                id="firstName"
                className="input input-firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="input-group">
              <label className="float-label label-lastName"> Last Name *</label>
              {errors && (
                <div className="error-comp">
                  <p className="error">{errors.lastName}</p>
                </div>
              )}
              <input
                type="text"
                autoComplete="off"
                name="lastName"
                id="lastName"
                className="input input-lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>

          {/* userName name and email */}

          <div className="input-row">
            <div className="input-group">
              <label className="float-label label-userName"> User Name *</label>
              {errors && (
                <div className="error-comp">
                  <p className="error">{errors.userName}</p>
                </div>
              )}
              <input
                type="text"
                autoComplete="off"
                name="userName"
                id="userName"
                className="input input-userName"
                value={values.userName}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
            </div>

            <div className="input-group">
              <label className="float-label label-email"> Email *</label>
              {errors && (
                <div className="error-comp">
                  <p className="error">{errors.email}</p>
                </div>
              )}
              <input
                type="text"
                autoComplete="off"
                name="email"
                id="email"
                className="input input-email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
            </div>
          </div>

          {/* Mobile Number and Gender */}

          <div className="input-row">
            <div className="input-group">
              <label className="float-label label-mobileNumber">
                Mobile Number
              </label>
              {errors && (
                <div className="error-comp">
                  <p className="error">{errors.mobileNumber}</p>
                </div>
              )}
              <input
                type="number"
                autoComplete="off"
                name="mobileNumber"
                id="mobileNumber"
                className="input input-mobileNumber"
                value={values.mobileNumber}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
            </div>

            <div className="input-group">
              <label className="float-label label-gender"> Gender *</label>

              <div className="radio-input">
                <div className="radio-group">
                  <label className="float-label radio-label">Male</label>
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    className="radio-input"
                    value={"male"}
                    onChange={() => {}}
                  ></input>
                </div>

                <div className="radio-group">
                  <label className="float-label radio-label">Female</label>
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    className="radio-input"
                    value={"female"}
                    onChange={() => {}}
                  ></input>
                </div>

                <div className="radio-group">
                  <label className="float-label radio-label">Other</label>
                  <input
                    type="radio"
                    name="gender"
                    id="other"
                    className="radio-input"
                    value={"other"}
                    onChange={() => {}}
                  ></input>
                </div>
              </div>
            </div>
          </div>

          {/* password and confirm password */}

          <div className="input-row">
            <div className="input-group">
              <label className="float-label label-password" htmlFor="password">
                Password
              </label>
              {errors && (
                <div className="error-comp">
                  <p className="error">{errors.password}</p>
                </div>
              )}
              <input
                type="password"
                autoComplete="off"
                name="password"
                id="password"
                className="input input-password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="input-group">
              <label className="float-label label-confirmPassword">
                Confirm Password
              </label>
              {errors && (
                <div className="error-comp">
                  <p className="error">{errors.confirmPassword}</p>
                </div>
              )}
              <input
                type="password"
                autoComplete="off"
                name="confirmPassword"
                id="confirmPassword"
                className="input input-confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div className="submit-comp">
            <button type="submit" className="submit">
              Registration
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;

{
  /* Country and State */
}

//  <div className="input-row">
//  <div className="input-group">
//    <label className="float-label label-mobileNumber"> Country</label>
//    <input
//      type="text"
//      autoComplete="off"
//      name="country"
//      id="country"
//      className="input input-country"
//    ></input>
//  </div>

//  <div className="input-group">
//    <label className="float-label label-gender"> State*</label>
//    <input
//      type="text"
//      autocomplete="off"
//      name="State"
//      id="gender"
//      className="input input-State"
//    ></input>
//  </div>
// </div>
