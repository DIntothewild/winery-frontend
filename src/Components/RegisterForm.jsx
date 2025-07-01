import { Modal, Box, Button, TextField } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    padding: 4,
    outline: 'none',
};

const validationSchema = Yup.object({
    nombre: Yup.string().required('Required'),
    apellidos: Yup.string().required('Required'),
    correo: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'), // Solo requerimos la contraseña
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
    telefono: Yup.string().required('Required'),
});

const RegisterForm = ({ open, onClose }) => {
    const [successModalOpen, setSuccessModalOpen] = useState(false);

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });

            setSubmitting(false);

            if (response.ok) {
                setSuccessModalOpen(true);
                setTimeout(() => {
                    setSuccessModalOpen(false);
                    onClose();
                }, 2000);
            } else {
                const error = await response.json();
                console.error('Error al registrar usuario:', error);
            }
        } catch (error) {
            setSubmitting(false);
            console.error('Error de red al registrar usuario:', error);
        }
    };

    return (
        <>
            <Modal open={open} onClose={onClose} aria-labelledby="register-modal-title" aria-describedby="register-modal-description">
                <Box sx={{ ...style, width: 400 }}>
                    <h2 id="register-modal-title">Registro</h2>
                    <Formik
                        initialValues={{ nombre: '', apellidos: '', correo: '', password: '', confirmPassword: '', telefono: '' }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <Field as={TextField} name="nombre" label="Nombre" fullWidth margin="normal" />
                                <ErrorMessage name="nombre" component="div" style={{ color: 'red' }} />
                                <Field as={TextField} name="apellidos" label="Apellidos" fullWidth margin="normal" />
                                <ErrorMessage name="apellidos" component="div" style={{ color: 'red' }} />
                                <Field as={TextField} name="correo" label="Correo Electrónico" fullWidth margin="normal" />
                                <ErrorMessage name="correo" component="div" style={{ color: 'red' }} />
                                <Field as={TextField} name="password" label="Contraseña" type="password" fullWidth margin="normal" />
                                <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                                <Field as={TextField} name="confirmPassword" label="Confirmar Contraseña" type="password" fullWidth margin="normal" />
                                <ErrorMessage name="confirmPassword" component="div" style={{ color: 'red' }} />
                                <Field as={TextField} name="telefono" label="Teléfono" fullWidth margin="normal" />
                                <ErrorMessage name="telefono" component="div" style={{ color: 'red' }} />
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
                                    <Button type="button" onClick={onClose} disabled={isSubmitting}>Cancelar</Button>
                                    <Button type="submit" color="primary" disabled={isSubmitting} style={{ marginLeft: '10px' }}>Registrar</Button>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Modal>
            <Modal open={successModalOpen}>
                <Box sx={{ ...style, width: 400 }}>
                    <h2>Usuario registrado con éxito</h2>
                </Box>
            </Modal>
        </>
    );
};

export default RegisterForm;
