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
const phoneRules = /^01\d{9}$/;
export const validation = yup.object().shape({
  name: yup.string().required("required"),
  phones: yup
    .array()
    .of(
      yup
        .string()
        .matches(
          phoneRules,
          "Phone number must start with 01 and have 11 digits"
        )
        .required("Phone number is required")
    )
    .min(1, "At least one phone number is required")
    .test("unique", "Phone numbers must be unique", function (phones) {
      const uniquePhones = new Set(phones);
      return uniquePhones.size === phones.length; // تأكد من أن كل الأرقام فريدة
    }),
});
