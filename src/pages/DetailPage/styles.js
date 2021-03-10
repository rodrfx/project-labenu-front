import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto;
`;

export const Card = styled.div`
    width: auto;
    margin: 10px;

    img {
        max-width: 100%;
        width: 25rem;
        height: 25rem;
        object-fit: cover;
        border-radius: 10px;
    };
`;

export const Info = styled.div`
     padding: 0 10%;
     padding-bottom: 10px;
     h3{
         margin-top: 2%;
     };
     p{
        margin: 3px 0;
     }
`;