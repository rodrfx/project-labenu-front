import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { goToHomePage } from '../Routes/coordinator';

export const createImage = (body, resetForm, history) => {
    axios.post(`${BASE_URL}/createImage`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res) => { 
        alert(res.data.message)
        goToHomePage(history)
        resetForm()
    })
    .catch((error) => alert(error.data.message))
}