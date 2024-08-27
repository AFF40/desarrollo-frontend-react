import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const formData = useSelector(state => state.form.formData);
    const passValid = useSelector(state => state.form.passValid);

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/default">Default</Link>
                </li>
                <li>
                    <Link to="/products">Product</Link>
                </li>
                <li>
                    <Link to="/login">LoginForm</Link>
                </li>
            </ul>
            
            {passValid && (
                <div className='dataLoged'>
                    <p>bienvenido {formData.username} : {formData.email} </p>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
