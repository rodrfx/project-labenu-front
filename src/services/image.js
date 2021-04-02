import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { goToHomePage } from '../Routes/coordinator';

export const createImage = (body, resetForm, history, setIsLoading) => {
    setIsLoading(true)

    axios.post(`${BASE_URL}/createImage`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res) => { 
        resetForm()
        setIsLoading(false)
        goToHomePage(history)
        alert(res.data.message)
    })
    .catch((error) => {
        setIsLoading(false)
        alert(error.data.message)
    })
}