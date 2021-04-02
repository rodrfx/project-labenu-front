import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: var( --white);
    color: var(--text);
}

:root{
	--white: #fff;
	--background: #F2F3F5;
	--gray-line: #DCDDE0;
	--text: #666666;
	--text-highlight: #B3B9FF; 
	--title: #2E384D;
	--red: #E83F5B;
	--green: #4CD62B; 
	--blue: #5965E0;
	--blue-dark: #4953B8;
}

@media(max-width: 1080px){
    html{
        font-size:93.75%
    }
}
    
@media(max-width: 720px){
    html{
        font-size:87.5%
    }
}



/* body, input, textarea, button {
    font: 400 16px "Inter", sans-serif;
} */

button{
    cursor: pointer
}

a{
    color: inherit;
    text-decoration: none;
}

input {
        margin-bottom: 15px;
        font-size: 1rem;
        height: 2rem;
        padding: 15px
};
`;

export default GlobalStyle;