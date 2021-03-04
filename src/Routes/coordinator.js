export const goToLoginPage = (history) => {
    history.push('/login')
}

export const goToSignUpPage = (history) => {
    history.push('/cadastro')
}

export const goToCreateImage = (history) => {
    history.push('/enviar-imagem')
}

export const goToHomePage = (history) =>{
    history.push('/')
}

export const logOut = (history) => {
    localStorage.removeItem('token')
    history.push('/login')
}