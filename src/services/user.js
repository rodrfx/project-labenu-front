import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { goToHomePage } from '../Routes/coordinator';

export const login = (body, history, setRightButtonText,resetForm, setIsLoading) => {
    setIsLoading(true)

    axios.post(`${BASE_URL}/user/login`, body)
        .then(response => {
            localStorage.setItem("token", response.data.token)
            resetForm()
            setIsLoading(false)
            goToHomePage(history)
            setRightButtonText("Logout")
        }).catch(error => {
            setIsLoading(false)
            alert(error.response.data.message)
        })
}

export const signUp = (body, history, setRightButtonText, resetForm, setIsLoading) => {
    setIsLoading(true)
    
    axios.post(`${BASE_URL}/user/signup`, body)
        .then(response => {
            localStorage.setItem("token", response.data.token)
            resetForm()
            setIsLoading(false)
            goToHomePage(history)
            setRightButtonText("Logout")
        }).catch(error => {
            setIsLoading(false)
            alert(error.response.data.message)
        })
}