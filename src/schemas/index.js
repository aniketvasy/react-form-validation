import * as Yup from "yup";

export const signUpSchemas = Yup.object({
  firstName: Yup.string()
    .min(2, "First Name should be 2 to 30 characters")
    .max(30, "First Name Should be less then 20 characters")
    .required("Please Enter Your First Name"), // function chaining
  lastName: Yup.string()
    .min(2, "Last Name should be 2 to 30 characters")
    .max(30, "Last Name Should be less then 30 characters")
    .required("Please Enter Your Last Name"),
  userName: Yup.string()
    .min(2, "User Name should be 2 to 30 characters")
    .max(20, "User Name should be 2 to 30 characters")
    .required("Please Enter Your User Name"),
  email: Yup.string()
    .email("Enter valid email")
    .required("Please Enter Your Email"),
  mobileNumber: Yup.string()
    .required("Please Enter Mobile Number")
    .matches(/^[6-9]\d{9}$/, "Enter Valid Mobile Number"),
  gender: Yup.string().min(1).required("Please Enter Gender"),
  password: Yup.string()
    .min(6, "Password should be 6 to 40 characters")
    .max(40, "Password should be 6 to 40 characters")
    .required("Please Enter Password"),
  confirmPassword: Yup.string()
    .required("Please Enter Confirm Password")
    .oneOf([Yup.ref("password"), null], "Password Not Match"),
  // country: Yup.object()
  //   .shape({
  //     isoCode: Yup.string().required("please Select Country"),
  //     label: Yup.string().required("please Select Country"),
  //   })
  country: Yup.object().required("please Select Country"),
  state: Yup.object().required("please Select Country"),
  city: Yup.object().required("please Select Country"),
  pinCode: Yup.string()
    .matches(/^[1-9][0-9]{5}$/, "Enter Valid Pin Code")
    .required("Please Enter Pin Code"),
  dateOfBirth: Yup.string().required("Please Enter Date Of Birth"),
  panNumber: Yup.string()
    .matches(
      /([A-Z]){5}([0-9]){4}([A-Z]){1}$/,
      "Please Enter Valid Pan Card Number"
    )
    .required("please Enter Pan Card Number"),
});
