import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { goToLoginPage } from '../Routes/coordinator';

export default function useUnprotectPage () {
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem ("token")

        if (!token){
            goToLoginPage(history)
        }

    }), [history];
}