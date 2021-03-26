import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    max-width: 400px;
    margin: 20px auto;
    h1{
        margin-bottom: 10px
    }
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    input{
        height: 2rem;
    }
    button{
        height: 2rem;
    };
`;