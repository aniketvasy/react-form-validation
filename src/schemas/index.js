import * as Yup from "yup";

export const signUpSchemas = Yup.object({
  firstName: Yup.string()
    .min(2)
    .max(30)
    .required("Please Enter Your First Name"),
  lastName: Yup.string().min(2).max(30).required("Please Enter Your Last Name"),
  userName: Yup.string().min(2).max(20).required("Please Enter Your User Name"),
  email: Yup.string().email().required("Please Enter Your Email"),
  mobileNumber: Yup.string()
    .min(10)
    .max(10)
    .required("Please Enter Your Mobile Number"),
  gender: Yup.string().min(1),
  password: Yup.string().min(6).required("Please Enter Password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password Not Match"),
});
