import Button from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import GlobalStyle from "@/styles/globalstyle";
import  Main from "@/components/Main/Main";
import useNavigation from "@/src/hooks/useNavigation";


export default function Home() {
    const { navigateTo } = useNavigation();

    return (
        <>
        <GlobalStyle/>
        <Header/>
        <Main>
        <Button ariaLabel="Ir para página de Profissionais de Saúde" onClick={() => navigateTo('https://profissional.lacreisaude.com.br/')}>
            Profissionais de Saúde
        </ Button>
        <Button ariaLabel="Ir para seção Nossa Missão" onClick={() => navigateTo('https://lacreisaude.com.br/quem-somos/#missao-visao-valores')}>
            Nossa Missão
        </ Button>
        <Button ariaLabel="Ir para o FAQ" onClick={() => navigateTo('https://lacreisaude.com.br/ajuda/')}>
            FAQ
        </Button>
        </Main>
        <Footer/>
        </>
    )
}