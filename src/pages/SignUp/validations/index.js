import * as Yup from "yup";

export const SignUpValidationSchema = Yup.object({
   firstName: Yup.string().required("Required field").min(2, "Minimum 2 characters").max(15, "Maximum 15 characters"),
   lastName: Yup.string().required("Required field").min(2, "Minimum 2 characters").max(15, "Maximum 15 characters"),
   email: Yup.string().email("Invalid email address").required("Required field"),
   gender: Yup.string().required("Required field"),
   password: Yup.string().required("Required field").min(8, "Minimum 8 characters")
      .matches(/[0-9]/, "Number is required")
      .matches(/[a-z]/, "Lowercase letter is required")
      .matches(/[A-Z]/, "Uppercase letter is required"),
   confirmPassword: Yup.string().required("Required field").oneOf([Yup.ref('password'), null], "Passwords must match"),
   phone: Yup.string().required("Required field").min(6, "Minimum 6 characters").max(12, "Maximum 12 characters"),
});