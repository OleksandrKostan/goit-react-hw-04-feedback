import styled from "styled-components";

export const Button = styled.button`
background-color: ${props => props.theme.colors.black};
    border: none;
    color: ${props => props.theme.colors.white};
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10%;
    box-shadow: 5px;
    :hover{
        background-image: linear-gradient(217deg, rgba(255,0,0,0.8), rgba(255,0,0,0) 70.71%),linear-gradient(127deg, rgba(0,0,255,0.8), rgba(0,0,255,0) 70.71%),linear-gradient(336deg, rgba(0,255,0,0.8), rgba(0,255,0,0) 70.71%);
   }
margin-left: 60px;
   ;
`
export const Conteiner = styled.div`
text-align: center;
height: auto;
 margin-left: auto;
 margin-right: auto;
`