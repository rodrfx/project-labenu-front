import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    max-width: 400px;
    margin: 20px auto;
    h1{
        font-size: 3rem;
        margin: 0 auto;
        margin-bottom: 5rem;
    };
    img{
        width: 70px;
        margin: 0 auto;
        margin-bottom: 10px;
    };
`;


export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    height: 11vh;
    justify-content: space-around;
    margin-bottom: 60px;
        button{
            padding: 5px 0;
            margin-bottom: 60px;
            font-size: 18px;
        }
`;

export const ButtonSignup = styled.button`
    border: none;
    background: none;
    font-size: 16px;
`;