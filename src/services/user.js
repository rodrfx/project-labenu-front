import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { goToCreateImage } from '../Routes/coordinator';


export const login = (body, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/user/login`, body)
        .then(response => {
            localStorage.setItem("token", response.data.token)
            goToCreateImage(history)
            setRightButtonText("Logout")

        }).catch(error => {
            console.log(error.message)
            alert("Nome de usuário ou senha incorretos")
        })
}

export const signUp = (body, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/user/signup`, body)
        .then(response => {
            localStorage.setItem("token", response.data.token)
            goToCreateImage(history)
            setRightButtonText("Logout")
        }).catch(error => {
            console.log(error.message)
        })
}