import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import { signUpSchemas } from "../schemas";
import Select from "react-select";
import { City, Country, State } from "country-state-city";
import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";

const Form = () => {
  const [dateErrorMessage, setDateErrorMessage] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState(true);
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
    pinCode: "",
    dateOfBirth: "",
    panNumber: "",
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
      // alert("yehooo");
      console.log("last errors", errors);

      ////////----------   API   ---------------

      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      const data = {
        ...values,
        country: values.country.name,
        state: values.state.name,
        city: values.city.name,
      };

      const body = {
        userData: data,
      };

      const options = {
        method: "POST",
        headers,
        mode: "cors",
        body: JSON.stringify(body),
      };

      fetch("https://eoa19gixa3mpvz4.m.pipedream.net", options)
        .then((response) => response.json())
        .then((data) => {
          setSubmitMessage("Successfully Submitted 😃");
          setSubmitStatus(true);
          console.log("Success:", data);
          action.resetForm();
        })
        .catch((error) => {
          setSubmitMessage("Somthing Went Wrong 😔");
          setSubmitStatus(false);
          console.error("Error:", error);
        });

      ////////----------   API -/   ------------
      // action.resetForm();
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

  async function hello() {
    if (errors.country) {
      touched.country = true;
    }
    if (errors.state) {
      touched.state = true;
    }
    if (errors.city) {
      touched.city = true;
    }
  }

  const exceptThisSymbols = ["e", "E", "+", "-", "."];
  const re = /^[0-9\b]+$/;

  useEffect(() => {}, [dateErrorMessage]);
  console.log(
    "Select Date Between ${e.target.max} to ${e.target.min}",
    dateErrorMessage
  );

  return (
    <>
      <div className="form-comp" onSubmit={handleSubmit}>
        <form action="" className="form">
          {/* first name and last name */}

          <div className="formHeading-comp">
            <h1 className="formHeading">Registration Form</h1>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label
                className="float-label label-firstName"
                htmlFor="firstName"
              >
                First Name
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
                className={
                  errors.firstName && touched.firstName
                    ? "input input-firstName input-error"
                    : "input input-firstName"
                }
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="input-group">
              <label className="float-label label-lastName"> Last Name </label>
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
                className={
                  errors.lastName && touched.lastName
                    ? "input input-lastName input-error"
                    : "input input-lastName"
                }
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>

          {/* userName name and email */}

          <div className="input-row">
            <div className="input-group">
              <label className="float-label label-userName"> User Name </label>
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
                className={
                  errors.userName && touched.userName
                    ? "input input-userName input-error"
                    : "input input-userName"
                }
                value={values.userName}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
            </div>

            <div className="input-group">
              <label className="float-label label-email"> Email </label>
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
                className={
                  errors.email && touched.email
                    ? "input input-email input-error"
                    : "input input-email"
                }
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
                className={
                  errors.mobileNumber && touched.mobileNumber
                    ? "input input-mobileNumber input-error"
                    : "input input-mobileNumber"
                }
                value={values.mobileNumber}
                onKeyDown={(e) =>
                  exceptThisSymbols.includes(e.key) && e.preventDefault()
                }
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
                className={
                  errors.password && touched.password
                    ? "input input-password input-error"
                    : "input input-password"
                }
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
                className={
                  errors.confirmPassword && touched.confirmPassword
                    ? "input input-confirmPassword input-error"
                    : "input input-confirmPassword"
                }
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
                <div className="error-comp locaion-error">
                  <p className="error">{"Please select country"}</p>
                </div>
              ) : null}

              <Select
                id="country"
                name="country"
                options={updatedCountries}
                value={values.country}
                placeholder={"Enter Country Name"}
                className={
                  errors.country && touched.country
                    ? "input-error input-country"
                    : "input-country"
                }
                onBlur={(e) => {
                  handleBlur(e);
                  if (errors.country) {
                    touched.country = true;
                  }
                  // console.log("true false==>", errors.country, err);
                }}
                onChange={(value) => {
                  console.log("====>", value);
                  // err = true;
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
              {errors.state && touched.state ? (
                <div className="error-comp locaion-error">
                  <p className="error">{"Please select state"}</p>
                </div>
              ) : null}

              <Select
                id="state"
                name="state"
                options={updatedStates(
                  values.country ? values.country.value : null
                )}
                className={
                  errors.state && touched.state
                    ? "input-error input-state"
                    : "input-state"
                }
                value={values.state}
                placeholder={"Enter State Name"}
                onBlur={(e) => {
                  handleBlur(e);
                  if (errors.state) {
                    // check = true;
                    touched.state = true;
                  }
                  // console.log("true false==>", errors.country, err);
                }}
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
                <div className="error-comp locaion-error">
                  <p className="error">{"Please select city"}</p>
                </div>
              ) : null}

              <Select
                id="city"
                name="city"
                options={updatedCities(
                  values.state ? values.state.countryCode : null,
                  values.state ? values.state.isoCode : null
                )}
                className={
                  errors.city && touched.city
                    ? "input-error input-city"
                    : "input-city"
                }
                value={values.city}
                placeholder={"Enter City Name"}
                // onChange={(value) => setFieldValue("city", value)}
                onBlur={(e) => {
                  handleBlur(e);
                  if (errors.city) {
                    touched.city = true;
                  }
                  // console.log("true false==>", errors.country, err);
                }}
                onChange={(value) => {
                  setValues({ ...values, city: value }, false);
                }}
              />
            </div>

            <div className="input-group">
              <label className="float-label label-pinCode">Pin Code</label>
              {errors.pinCode && touched.pinCode ? (
                <div className="error-comp">
                  <p className="error">{errors.pinCode}</p>
                </div>
              ) : null}
              <input
                type="number"
                autoComplete="off"
                name="pinCode"
                id="pinCode"
                className={
                  errors.pinCode && touched.pinCode
                    ? "input input-pinCode input-error"
                    : "input input-pinCode"
                }
                value={values.pinCode}
                onKeyDown={(e) =>
                  exceptThisSymbols.includes(e.key) && e.preventDefault()
                }
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
            </div>
          </div>

          {/* DOB and panCard */}

          <div className="input-row">
            <div className="input-group">
              <label
                className="float-label label-dateOfBirth"
                htmlFor="dateOfBirth"
              >
                Date Of Birth
              </label>
              {dateErrorMessage ? (
                <div className="error-comp">
                  <p className="error">{dateErrorMessage}</p>
                </div>
              ) : null}
              {errors.dateOfBirth && touched.dateOfBirth ? (
                <div className="error-comp">
                  <p className="error">{errors.dateOfBirth}</p>
                </div>
              ) : null}
              <input
                type="date"
                autoComplete="off"
                name="dateOfBirth"
                id="dateOfBirth"
                min="1900-11-11"
                max={
                  new Date(
                    new Date().getTime() -
                      new Date().getTimezoneOffset() * 60000
                  )
                    .toISOString()
                    .split("T")[0]
                }
                className={
                  errors.dateOfBirth && touched.dateOfBirth
                    ? "input input-dateOfBirth input-error"
                    : "input input-dateOfBirth"
                }
                value={values.date}
                onChange={handleChange}
                onBlur={handleBlur}
                onClick={(e) => console.log("e==>", e)}
                onInvalid={(e) => {
                  e.preventDefault();
                  setDateErrorMessage(
                    `DOB Should be [${e.target.min}] to [${e.target.max}]`
                  );
                }}
              />
            </div>

            <div className="input-group">
              <label className="float-label label-panNumber">
                {" "}
                Pan Card Number
              </label>
              {errors.panNumber && touched.panNumber ? (
                <div className="error-comp">
                  <p className="error">{errors.panNumber}</p>
                </div>
              ) : null}
              <input
                type="text"
                autoComplete="off"
                name="panNumber"
                id="panNumber"
                className={
                  errors.panNumber && touched.panNumber
                    ? "input input-panNumber input-error"
                    : "input input-panNumber"
                }
                value={values.panNumber}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>

          {/* ------------- */}

          <div className="submit-comp">
            <button type="submit" className="submit">
              Registration
            </button>
          </div>
          {submitMessage && (
            <div
              className={
                submitStatus
                  ? "submit-message-comp-success"
                  : "submit-message-comp-fail"
              }
            >
              <p className="submit-message">{submitMessage}</p>
            </div>
          )}
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

// \b(?:2003/04/(?:30|2[5-9])|2003/(?:(?:0[69]|11)/(?:30|[12][0-9]|0[1-9])|(?:0[578]|1[02])/(?:3[01]|[12][0-9]|0[1-9]))|2011/04/0[1-4]|2011/(?:02/(?:[12][0-9]|0[1-9])|0[13]/(?:3[01]|[12][0-9]|0[1-9]))|(?:2010|200[4-9])/(?:02/(?:[12][0-9]|0[1-9])|(?:0[469]|11)/(?:30|[12][0-9]|0[1-9])|(?:0[13578]|1[02])/(?:3[01]|[12][0-9]|0[1-9])))\b
// ([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))

// max={
//   new Date(
//     new Date().getTime() -
//       new Date().getTimezoneOffset() * 60000
//   )
//     .toISOString()
//     .split("T")[0]
// }
