import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';
import RegisterForm from '../Components/RegisterForm'; // Asegúrate de que la ruta sea correcta

const validationSchema = yup.object({
  email: yup.string().email('Correo inválido').required('Campo obligatorio'),
  password: yup.string().required('Campo obligatorio'),
});

export default function LoginPage() {
  const [message, setMessage] = useState('');
  const [openRegister, setOpenRegister] = useState(false);
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
       const response = await fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: values.email,   
           password: values.password
        }),
        });

        const data = await response.json();

        if (response.ok && data.jwt) {
          login({
    email: values.email,
    token: data.jwt,
    nombre: data.nombre, // <-- esto lo debe devolver el backend
});
          localStorage.setItem('token', data.jwt);
          setMessage('');
          navigate('/');
        } else {
          setMessage(data.message || 'Correo o contraseña incorrectos.');
        }
      } catch (error) {
        console.error('Error en login:', error);
        setMessage('Error al iniciar sesión. Intenta de nuevo.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="login-message">{formik.errors.email}</div>
          )}

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="login-message">{formik.errors.password}</div>
          )}

          <button type="submit" disabled={formik.isSubmitting}>
            Entrar
          </button>

          {message && <p className="login-message">{message}</p>}
        </form>

        <p className="login-register-text">
          ¿No tienes cuenta?{' '}
          <span className="register-link" onClick={() => setOpenRegister(true)}>
            Regístrate aquí
          </span>
        </p>
      </div>

      {/* Modal de registro */}
      <RegisterForm open={openRegister} onClose={() => setOpenRegister(false)} />
    </div>
  );
}