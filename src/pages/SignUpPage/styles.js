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
        margin-bottom: 2rem;
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
    margin-bottom: 20px;
    button{
        height: 2rem;
        font-size: 18px;
        &:hover{
                 background-color: #5e5e5d;
                 color: white;
            }
    }
`;