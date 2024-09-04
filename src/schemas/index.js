import * as yup from "yup";

const passwordRules =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

const emailRules = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRules, "Invalid email address")
    .required("Required"),
  password: yup
    .string()
    .min(8, "password must be at least 8 characters")
    .matches(passwordRules, "Please creat a strong password")
    .required("Required"),
});
