import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { goToHomePage } from '../Routes/coordinator';


function useUnprotectPage() {

const history = useHistory()

useEffect(() => {

const token = window.localStorage.getItem("token")

if (token) {
goToHomePage (history)
}
}, [history]);
}

export default useUnprotectPage;