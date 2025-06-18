import { useState } from "react";
import { HeaderContainer, Nav, Logo, NavLinkList, NavLinkItem, NavAnchor, HamburgerButton, MobileMenu } from "./style";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

return (
    <HeaderContainer>
        <Logo>Lacrei Saúde</Logo>
    <HamburgerButton
        aria-label="Abrir menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
    ☰
    </HamburgerButton>
    <Nav aria-label="Main navigation">
        <MobileMenu isOpen={isMenuOpen}>
        <NavLinkList>
            <NavLinkItem>
            <NavAnchor href="https://lacreisaude.com.br/quem-somos/" onClick={() => setIsMenuOpen(false)}>Quem Somos</NavAnchor>
            </NavLinkItem>
            <NavLinkItem>
            <NavAnchor href="https://paciente.lacreisaude.com.br/" onClick={() => setIsMenuOpen(false)}>Buscar Atendimento</NavAnchor>
            </NavLinkItem>
            <NavLinkItem>
            <NavAnchor href="https://profissional.lacreisaude.com.br/" onClick={() => setIsMenuOpen(false)}>Oferecer Atendimento</NavAnchor>
            </NavLinkItem>
        </NavLinkList>
        </MobileMenu>
            </Nav>
    </HeaderContainer>
);
}
