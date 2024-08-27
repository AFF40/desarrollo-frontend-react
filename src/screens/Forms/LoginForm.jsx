import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import { saveFormData } from "../../redux/form/formActions";
import { motion } from "framer-motion";
import ModalInfo from "../../components/ModalInfo";
import { useState, useEffect } from "react";

const LoginForm = () => {
    const [values, handleChange, resetForm] = useForm({ username: '', email: '', password: '' });
    const [showModalInfo, setShowModalInfo] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const form = useSelector(state => state.form);
    const passValid = useSelector(state => state.form.passValid);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(saveFormData(values));
    };

    const handleLogout = () => {
        setModalMessage('¿Estás seguro de que quieres cerrar sesión?');
        setShowModalInfo(true);
    };

    const hideModalInfo = () => {
        setShowModalInfo(false);
    };

    const confirmLogout = () => {
        dispatch({ type: 'CLEAR_FORM_DATA' });
        resetForm(); 
        setShowModalInfo(false);
    };

    useEffect(() => {
        console.log("passValid:", passValid);
        if (passValid !== null) {
            if (passValid) {
                setModalMessage('Bienvenido');
            } else {
                setModalMessage('Contraseña incorrecta');
            }
            setShowModalInfo(true);
        }
    }, [passValid]);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const isUserLoggedIn = form.formData.username && form.formData.email;

    return (
        <motion.div
            initial={{ opacity: 0, y: -70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="container">
                <ModalInfo 
                    visible={showModalInfo} 
                    message={modalMessage} 
                    onClose={hideModalInfo}
                    onConfirm={modalMessage === '¿Estás seguro de que quieres cerrar sesión?' ? confirmLogout : null}
                    showConfirmButton={modalMessage === '¿Estás seguro de que quieres cerrar sesión?'}
                    isUserLoggedIn={isUserLoggedIn}
                />
                
                <form onSubmit={handleSubmit}>
                    <h5>username: {form.formData.username}</h5>
                    <h5>email: {form.formData.email}</h5>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        <button type="button" onClick={togglePasswordVisibility}>
                            {showPassword ? "Ocultar" : "Mostrar"} 
                        </button>
                    </div>
                    <div>
                        {!isUserLoggedIn && (
                            <button className="button-submit" type="submit">Submit</button>
                        )}
                        {isUserLoggedIn && (
                            <a className="link-logout" href="#" onClick={handleLogout}>Logout</a>
                        )}
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default LoginForm;
