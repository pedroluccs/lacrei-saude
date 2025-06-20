import styled from "styled-components";

export const StyledButton = styled.button`
background-color: #00796b;
color: #fff;
padding: 16px 100px;
width: 400px;
margin-top: 32px;
border: none;
border-radius: 8px;
font-size: 1rem;
cursor: pointer;
flex-direction: column;


@media (max-width: 768px) {
    padding: 16px 80px;
    width: 325px;
    }

@media (max-width: 1024px) {
    padding: 16px 100px;
    width: 400px;
    font-size: 1.5rem;
}

@media (max-width: 420px) {
    padding: 16px 80px;
    width: 350px;
}


&:hover {
background-color: #004d40;
}
`
