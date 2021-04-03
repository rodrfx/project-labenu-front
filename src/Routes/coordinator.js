export const goToLoginPage = (history) => {
    history.push('/')
}

export const goToSignUpPage = (history) => {
    history.push('/cadastro')
}

export const goToCreateImage = (history) => {
    history.push('/enviar-imagem')
}

export const goToHomePage = (history) => {
    history.push('/home')
}

export const goToDetailPage = (history, id) => {
    history.push(`/detalhe/${id}`)
}

export const logOut = (history) => {
    localStorage.removeItem('token')
    history.push('/login')
}