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

@media (max-width: 768px) {
padding: 16px 80px;
width: 325px;
}

@media (max-width: 1024px) {
padding: 24px 100px;
width: 500px;
font-size: 1.5rem;
}

&:hover {
background-color: #004d40;
}
`

export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
gap: 20px;
flex-wrap: wrap;
`