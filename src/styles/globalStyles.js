import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: var( --background);
    color: var(--text);
}

:root{
	--white: #fff;
	--background: #F2F3F5;
	--text: #666666;
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

body, input, textarea, button {
   font-family: 'Roboto', sans-serif;
}

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