import styled from 'styled-components';

export const Container = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: auto;
    margin: 10px;
    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    };

    img {
        max-width: 100%;
        width: 15rem;
        height: 15rem;
        border-radius: 10px;
        object-fit: cover;
        cursor: pointer;
    }
`;

export const Info = styled.div`
     padding: 0 10%;
     padding-bottom: 10px;
`;



