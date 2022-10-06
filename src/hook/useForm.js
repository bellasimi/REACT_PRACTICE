import { useEffect, useState } from "react";
import {
  REGEX_ID,
  REGEX_NICKNAME,
  REGEX_PASSWORD,
  LENGTH_NICKNAME,
  LENGTH_PASSWORD,
} from "utils/constants";

const useForm = ({ initialValue, onSubmit }) => {
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState(initialValue);

  useEffect(() => {}, []);

  const validate = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: "" });
    setErrors({ ...errors, [name]: "" });
    switch (name) {
      case "nickName":
        if (!REGEX_NICKNAME.test(value)) {
          setErrors({ ...errors, [name]: value });
          e.target.value = value.slice(0, LENGTH_NICKNAME);
        }
        break;
      case "id":
        if (!REGEX_ID.test(value)) {
          setErrors({ ...errors, [name]: value });
        }
        break;
      case "password":
        if (!REGEX_PASSWORD.test(value)) {
          setErrors({ ...errors, [name]: value });
        }
        e.target.value = value.slice(0, LENGTH_PASSWORD);
        break;
      case "passwordConfirm":
        if (values.password !== value) {
          setErrors({ ...errors, [name]: value });
        }
        e.target.value = value.slice(0, LENGTH_PASSWORD);
        break;

      default:
        break;
    }
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidate = Object.values(errors).every((error) => error === "");
    const isNotNull = Object.values(values).every((value) => value !== "");

    if (isValidate && isNotNull) {
      onSubmit(values);
    }
  };

  return [values, errors, validate, handleSubmit];
};

export default useForm;
