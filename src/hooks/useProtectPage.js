import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { goToLoginPage } from '../Routes/coordinator';


function useProtectPage() {
    const history = useHistory()

    useLayoutEffect (() => {
      const token = window.localStorage.getItem("token")
    
      if (!token) {
        goToLoginPage (history)
      }
    
    }, [history]);
}

export default useProtectPage;