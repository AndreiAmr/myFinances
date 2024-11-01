import { useFormik } from 'formik';
import * as yup from 'yup';
import { loginValidationTexts } from './texts/loginValidations.texts';
import { useDispatch } from 'react-redux';
import { loginActions } from '../../../../store/authenticationModule/modules/login/loginActions';

const initialValues = {
  email: 'andrei@gmail.com',
  password: 'amaral',
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email(loginValidationTexts.emailInvalid)
    .required(loginValidationTexts.emailRequired),
  password: yup.string().required(loginValidationTexts.passwordRequired),
});

export const useLogin = () => {
  const dispatch = useDispatch();
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: val => {
      dispatch(loginActions.getLoginAsync(val));
    },
    validateOnChange: false,
  });

  console.log({ values });

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};
