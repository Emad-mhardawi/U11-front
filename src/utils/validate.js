import * as yup from 'yup';
/// Define validation schema for all inputs fields in the application
/// using yup

/// validate login / signup forms
export const loginInputsValidation = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
})

export const signupInputsValidation = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'passwords must match'),
})


export const passwordsValidation = yup.object().shape({
    password: yup.string().min(6).required(),
    confirmedPassword: yup.string().oneOf([yup.ref('password'), null], 'passwords must match'),
})


export const contactFormValidation = yup.object().shape({
    username: yup.string(),
    email: yup.string().email().required(),
    message: yup.string().required("you can't send an empty message"),
})

export const reviewFormValidation = yup.object().shape({
    comment: yup.string().required("you can't add an empty comment"),
    email: yup.string().email().required(),
    name: yup.string().required(),
    starsCount: yup.string().required()
})