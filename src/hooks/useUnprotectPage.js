import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { goToCreateImage } from '../Routes/coordinator';


function useUnprotectPage() {

const history = useHistory()

useEffect(() => {

const token = window.localStorage.getItem("token")

if (token) {

goToCreateImage (history)

}

}, [history]);

}

export default useUnprotectPage;