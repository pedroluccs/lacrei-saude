import styled from 'styled-components';

export const HeaderContainer = styled.header`
background-color: #e0f7fa;
padding: 20px;
text-align: center;
`;

export const Title = styled.h1`
font-size: 2rem;
color: #00796b;

@media (max-width: 768px) {
font-size: 1.5rem;
}

@media (max-width: 1024px) {
font-size: 2.4rem;
}

`;