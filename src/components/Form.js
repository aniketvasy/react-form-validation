import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import { signUpSchemas } from "../schemas";
import Select from "react-select";
import { City, Country, State } from "country-state-city";

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
    country: "",
    state: "",
    city: "",
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setValues,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchemas,
    onSubmit: (values, action) => {
      console.log("submited Data", values);

      ////////----------   API   ---------------

      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      const body = {
        userData: values,
      };

      const options = {
        method: "POST",
        headers,
        mode: "cors",
        body: JSON.stringify(body),
      };

      fetch("https://eo87micm2jvi3ja.m.pipedream.net", options);

      ////////----------   API -/   ------------
      action.resetForm();
    },
  });

  console.log("Errors", errors);
  console.log("Values", values);

  /////////////////////////////////////////////////////////////////////////

  const countries = Country.getAllCountries();
  console.log("countries", countries[0].isoCode);

  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.isoCode,
    ...country,
  }));

  const updatedStates = (countryId) =>
    State.getStatesOfCountry(countryId).map((state) => ({
      label: state.name,
      value: state.isoCode,
      code: state.countryCode,
      ...state,
    }));

  console.log("------", updatedCountries);

  const updatedCities = (stateId, cou) =>
    City.getCitiesOfState(stateId, cou).map((city) => ({
      label: city.name,
      value: city.stateCode,
      ...city,
    }));

  console.log("======000===>", City.getCitiesOfState("IN", "GJ"));

  ////////////////////////////////////////////////////////////////////////

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
              {errors.firstName && touched.firstName ? (
                <div className="error-comp">
                  <p className="error">{errors.firstName}</p>
                </div>
              ) : null}
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
              {errors.lastName && touched.lastName ? (
                <div className="error-comp">
                  <p className="error">{errors.lastName}</p>
                </div>
              ) : null}
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
              {errors.userName && touched.userName ? (
                <div className="error-comp">
                  <p className="error">{errors.userName}</p>
                </div>
              ) : null}
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
              {errors.email && touched.email ? (
                <div className="error-comp">
                  <p className="error">{errors.email}</p>
                </div>
              ) : null}
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
              {errors.mobileNumber && touched.mobileNumber ? (
                <div className="error-comp">
                  <p className="error">{errors.mobileNumber}</p>
                </div>
              ) : null}
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
              <label className="float-label label-gender"> Gender </label>

              {errors.gender && touched.gender ? (
                <div className="error-comp">
                  <p className="error">{errors.gender}</p>
                </div>
              ) : null}

              <div className="radio-input">
                <div className="radio-group">
                  <label className="float-label radio-label">Male</label>
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    className="radio-input"
                    value={"male"}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
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
              {errors.password && touched.password ? (
                <div className="error-comp">
                  <p className="error">{errors.password}</p>
                </div>
              ) : null}
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
              {errors.confirmPassword && touched.confirmPassword ? (
                <div className="error-comp">
                  <p className="error">{errors.confirmPassword}</p>
                </div>
              ) : null}
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

          {/* Countuy and Statses */}

          <div className="input-row">
            <div className="input-group">
              <label className="float-label label-country">Country</label>
              {errors.country && touched.country ? (
                <div className="error-comp">
                  <p className="error">{errors.country}</p>
                </div>
              ) : null}

              <Select
                id="country"
                name="country"
                options={updatedCountries}
                value={values.country}
                placeholder={"Enter Country Name"}
                onBlur={handleBlur}
                onChange={(value) => {
                  console.log("====>", value);
                  // updatedStates(value.countryCode);
                  setValues(
                    {
                      ...values,
                      country: value,
                      state: "",
                      city: "",
                    },
                    true
                  );
                }}
              />
            </div>

            <div className="input-group">
              <label
                className="float-label label-firstName"
                htmlFor="firstName"
              >
                State
              </label>
              {errors.state ? (
                <div className="error-comp">
                  <p className="error">{errors.state}</p>
                </div>
              ) : null}

              <Select
                id="state"
                name="state"
                options={updatedStates(
                  values.country ? values.country.value : null
                )}
                value={values.state}
                placeholder={"Enter Country Name"}
                onBlur={handleBlur}
                onChange={(value) => {
                  setValues({ ...values, state: value, city: "" }, false);
                }}
              />
            </div>
          </div>

          {/* City and Pincode */}

          <div className="input-row">
            <div className="input-group">
              <label className="float-label label-country">City</label>
              {errors.city && touched.city ? (
                <div className="error-comp">
                  <p className="error">{errors.city}</p>
                </div>
              ) : null}

              <Select
                id="city"
                name="city"
                options={updatedCities(
                  values.state ? values.state.countryCode : null,
                  values.state ? values.state.isoCode : null
                )}
                value={values.city}
                // onChange={(value) => setFieldValue("city", value)}
                onBlur={handleBlur}
                onChange={(value) => {
                  setValues({ ...values, city: value }, false);
                }}
              />
            </div>

            {/* <div className="input-group">
              <label
                className="float-label label-firstName"
                htmlFor="firstName"
              >
                State
              </label>
              {errors.state && touched.state ? (
                <div className="error-comp">
                  <p className="error">{errors.state}</p>
                </div>
              ) : null}

              <Select
                id="state"
                name="state"
                options={updatedStates(
                  values.country ? values.country.value : null
                )}
                value={values.state}
                placeholder={"Enter Country Name"}
                onChange={(value) => {
                  setValues({ ...values, state: value, city: null });
                }}
              />
            </div> */}
          </div>

          {/* ------------- */}

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
