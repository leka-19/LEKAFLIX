import styled from "styled-components";

const Button= styled.button`
border: 1px solid var(--white);
border-radius:4px; 
color: var(--white);
font-size: 16px; 
font-weight:bold;
padding: 16px 24px; 
text-decoration:none;
transition:opacity .3s;
&:hover,
&:focus{ 
    opacity:.5; 
} 

@media(max-width:794px){
    border:0;
    border-radius:0;
    position: fixed;
    left: 0 ;
    right:0 ;
    bottom:0 ;
    background-color:var(--primary);
    color:var(--white);
    outline:0;
    text-align:center;

}
`;

export default Button