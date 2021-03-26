import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    max-width: 400px;
    margin: 50px auto;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    height: 11vh;
    justify-content: space-around;
    margin-bottom: 20px;
    button{
        height: 2rem;
    }
`;