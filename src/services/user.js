import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { goToHomePage } from '../Routes/coordinator';


export const login = (body, history, setRightButtonText,resetForm) => {
    axios.post(`${BASE_URL}/user/login`, body)
        .then(response => {
            localStorage.setItem("token", response.data.token)
            goToHomePage(history)
            setRightButtonText("Logout")
            resetForm()
        }).catch(error => {
            console.log(error.message)
            alert("Nome de usuário ou senha incorretos")
        })
}

export const signUp = (body, history, setRightButtonText, resetForm) => {
    axios.post(`${BASE_URL}/user/signup`, body)
        .then(response => {
            localStorage.setItem("token", response.data.token)
            goToHomePage(history)
            setRightButtonText("Logout")
            resetForm()
        }).catch(error => {
            console.log(error.message)
        })
}