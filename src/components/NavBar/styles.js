import styled from 'styled-components';

export const Container = styled.div`
  height: 11vh;
  min-height: 100px;

  background: blue;
    div{
        display: flex;
  };
    p{
        margin: 10px;
        cursor: pointer;
    };
    h3{
        cursor: pointer;
    }
`;

export const Title = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
`;

export const Input = styled.input`
   margin: 0 auto;
   height: 20px;
   width: 30vw;
   border-radius: 2px;
   ::placeholder{
       text-align: center;
   }
`;
