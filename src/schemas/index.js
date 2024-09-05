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

import * as Yup from "yup";

const phoneRules = /^\d{10}$/;

export const validation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phones: Yup.array()
    .of(
      Yup.object().shape({
        countryCode: Yup.string().required("Country code"),
        number: Yup.string()
          .matches(phoneRules, "Phone number must be exactly 10 digits")
          .required("Phone number must be exactly 10 digits"),
      })
    )
    .test("uniqueNumbers", "Phone numbers must be unique", function (phones) {
      const phoneNumbers = phones.map((phone) => phone.number);

      // تخزين أرقام مكررة
      const duplicates = phoneNumbers.filter(
        (number, index) => phoneNumbers.indexOf(number) !== index
      );

      // إذا كانت هناك أرقام مكررة، نظهر الخطأ على الحقول
      if (duplicates.length > 0) {
        return this.createError({
          path: `phones[${phoneNumbers.indexOf(duplicates[0])}].number`,
          message: "This phone number is duplicated",
        });
      }

      // لا يوجد تكرار، تابع التحقق
      return true;
    }),
});

// بقية الكود الخاص بـ Formik form setup كما هو
