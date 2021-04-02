import styled from 'styled-components';

export const Container = styled.div`
  height: 11vh;
  min-height: 90px;
  border-bottom: 1px solid #5e5e5d;
    div{
        display: flex;
        align-items: center;
        font-size: 1.5rem;
  };
    p{
        font-weight: 600;
        margin: 20px;
        cursor: pointer;
        :hover{
            color: #5497fb;
        }
    };
    h1{
        cursor: pointer;
        font-size: 2.2rem;
        margin-left: 10px;
    };
    img{
        width: 50px;
        cursor: pointer;
    };
    button{
        width: auto;
        padding: 0 15px;
        height: 3rem;
        font-size: 1.2rem;
        border: none;
        border-radius: 2px;
        color: #666666;
        font-weight: 600;

    &:hover{
        background-color: #5e5e5d;
        color: white;
    };
   &:focus{
        outline: none;
    };

    };
`;

export const Title = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    margin: 0 10px;
`;
