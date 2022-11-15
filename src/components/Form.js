import React, { useState } from "react";

const Form = () => {
  const [userRegistration, setUserRegistration] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    mobileNumber: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegistration({ ...userRegistration, [name]: value });
    console.log(userRegistration);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
              <input
                type="text"
                autoComplete="off"
                name="firstName"
                id="firstName"
                className="input input-firstName"
                value={userRegistration.firstName}
                onChange={handleInput}
              />
            </div>

            <div className="input-group">
              <label className="float-label label-lastName"> Last Name *</label>
              <input
                type="text"
                autoComplete="off"
                name="lastName"
                id="lastName"
                className="input input-lastName"
                value={userRegistration.lastName}
                onChange={handleInput}
              />
            </div>
          </div>

          {/* userName name and email */}

          <div className="input-row">
            <div className="input-group">
              <label className="float-label label-userName"> User Name *</label>
              <input
                type="text"
                autoComplete="off"
                name="userName"
                id="userName"
                className="input input-userName"
                value={userRegistration.userName}
                onChange={handleInput}
              ></input>
            </div>

            <div className="input-group">
              <label className="float-label label-email"> Email *</label>
              <input
                type="text"
                autoComplete="off"
                name="email"
                id="email"
                className="input input-email"
                value={userRegistration.email}
                onChange={handleInput}
              ></input>
            </div>
          </div>

          {/* Mobile Number and Gender */}

          <div className="input-row">
            <div className="input-group">
              <label className="float-label label-mobileNumber">
                {" "}
                Mobile Number
              </label>
              <input
                type="number"
                autoComplete="off"
                name="mobileNumber"
                id="mobileNumber"
                className="input input-mobileNumber"
                value={userRegistration.mobileNumber}
                onChange={handleInput}
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
                    id="gender"
                    className="radio-input"
                    value={"male"}
                    onChange={handleInput}
                  ></input>
                </div>

                <div className="radio-group">
                  <label className="float-label radio-label">Female</label>
                  <input
                    type="radio"
                    name="gender"
                    id="gender"
                    className="radio-input"
                    value={"female"}
                    onChange={handleInput}
                  ></input>
                </div>

                <div className="radio-group">
                  <label className="float-label radio-label">Other</label>
                  <input
                    type="radio"
                    name="gender"
                    id="gender"
                    className="radio-input"
                    value={"other"}
                    onChange={handleInput}
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
              <input
                type="password"
                autoComplete="off"
                name="password"
                id="password"
                className="input input-password"
                value={userRegistration.password}
                onChange={handleInput}
              />
            </div>

            <div className="input-group">
              <label className="float-label label-confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                autoComplete="off"
                name="confirmPassword"
                id="confirmPassword"
                className="input input-confirmPassword"
                value={userRegistration.confirmPassword}
                onChange={handleInput}
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
      <div className="data">{userRegistration.name}</div>
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
