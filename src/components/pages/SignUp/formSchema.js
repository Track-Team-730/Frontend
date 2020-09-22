import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string()
        .required('Name is required')
        .min(3, 'Name must be 3 chars or longer'),
    primaryEmail: yup.string()
        .email('Must be a valid email')
        .required('Email is required'),
    password: yup.string()
        .required('Password is required')
        .min(6, 'Password must be 6 chars or longer'),
});