import * as yup from "yup";

export const BasicFormSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email Required"),
  age: yup.number().min(18).max(50).integer().required("Age is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});


