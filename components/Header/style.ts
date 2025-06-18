import styled from 'styled-components';

interface MobileMenuProps {
    isOpen: boolean;
}

export const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1.5rem 2rem;
background-color: #e0f7fa;
border-bottom: 1px solid #00796b;
flex-wrap: wrap;
`;

export const Logo = styled.h1`
font-size: 2rem;
color: #00796b;

@media (max-width: 768px) {
font-size: 1.5rem;
}

@media (max-width: 1024px) {
font-size: 2.4rem;
}

`;

export const HamburgerButton = styled.button`
background: none;
border: none;
font-size: 2rem;
display: none;
cursor: pointer;
color: #00796b;

@media (max-width: 768px) {
display: block;
}
`;

export const MobileMenu = styled.div<MobileMenuProps>`
    @media (max-width: 768px) {
display: ${({ isOpen }) => (isOpen ? "block" : "none")};
position: absolute;
top: 70px;
right: 0;
background-color: white;
width: 100%;
padding: 1rem;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

    @media (min-width: 769px) {
display: block;
}
`;


export const Nav = styled.nav``;

export const NavLinkList = styled.ul`
list-style: none;
display: flex;
gap: 1rem;
padding: 0;
margin: 0;


    @media (max-width: 768px) {
flex-direction: column;
align-items: flex-start;
padding-left: 0;
gap: 12px;
}
`;

export const NavLinkItem = styled.li``;


export const NavAnchor = styled.a`
text-decoration: none;
color: #00796b;
font-weight: 500;

&:hover,
&:focus {
color:rgb(0, 190, 168);
}
`;

