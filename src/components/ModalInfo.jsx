import { motion } from 'framer-motion';

const ModalInfo = ({ visible, message, onClose, onConfirm, showConfirmButton, isUserLoggedIn }) => {
    if (!visible) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <motion.div
                className="notification-success"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <button className="close-button" onClick={onClose}>
                    x
                </button>
                
                <div>
                    <p>{message}</p>
                </div>
                
                {showConfirmButton && (
                    <button onClick={onConfirm}>
                        Sí, salir
                    </button>
                )}
                
                {isUserLoggedIn && message !== "Bienvenido" && (
                    <button onClick={onClose}>
                        Cancelar
                    </button>
                )}
            </motion.div>
        </div>
    );
};

export default ModalInfo;
