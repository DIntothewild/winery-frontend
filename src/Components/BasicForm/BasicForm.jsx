import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const BasicForm = () => {
  const [message, setMessage] = useState('');

  const onSubmit = async (values) => {
    try {
      const response = await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      console.log(response)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data.jwt) {
        localStorage.setItem('token', data.jwt); // Almacena el token en localStorage
        setMessage(`Welcome ${values.email}!`);
        // Aquí podrías redirigir al usuario a otra página o realizar otras acciones
      } else {
        setMessage('Invalid email or password.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error logging in. Please try again.');
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div>{formik.errors.email}</div>
        )}

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <div>{formik.errors.password}</div>
        )}

        <button type="submit" disabled={formik.isSubmitting}>
          Submit
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BasicForm;

