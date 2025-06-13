import Button from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import GlobalStyle from "@/styles/globalstyle";
import Head from "next/head";

export default function Home() {
    const handleNavigation = (url: string) => {
        window.open(url, '_blank')
    };

    return (
        <>
        <Head>
            <title>Lacrei Saúde</title>
        </Head>
        <GlobalStyle/>
        <Header/>
        <main>
        <Button label="Profissionais de Saúde" onClick={() => handleNavigation('https://profissional.lacreisaude.com.br/')}/>
        <Button label="Nossa Missão" onClick={() => handleNavigation('https://lacreisaude.com.br/quem-somos/#missao-visao-valores')}/>
        <Button label="FAQ" onClick={() => handleNavigation('https://lacreisaude.com.br/ajuda/')}/>
        </main>
        <Footer/>
        </>
    )
}