import * as Yup from 'yup'




export const ValidationSchema = Yup.object().shape({
    firstName:Yup.string().required('first name is required'),
    lastName:Yup.string().required('lastName name is required'),
    email:Yup.string().email('Enter a valid email').required('email is required'),
    password:Yup.string().required('please Enter a Password').min(6,'password must have at leat 6 charcter'),
    confirmPassword:Yup.string().required('Please confirm password').oneOf([Yup.ref('password')],'password and confirm password does not match')
});