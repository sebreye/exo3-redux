import React, { useRef } from 'react';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { okemail } from '../../VerifSlice';

const VerifEmail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const email = useRef('');
    const handleConnexion = () => {
        dispatch(okemail(email.current.value));
        const isConnected = email.current.value === 'sebreyes222@gmail.com'; 
    if (isConnected) {
            navigate('/bienvenue');
        }
    };
    

    return (
        <div>
            <input type="text" ref={email} />
            <button onClick={handleConnexion}>Connexion</button>

    </div>
    );
};

export default VerifEmail;