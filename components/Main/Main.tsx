import { MainContainer } from "./style";

import { ReactNode } from "react";

type MainProps = {
children: ReactNode;
};

const Main = ({ children }: MainProps) => {
return (
    <MainContainer>
    {children}
    </MainContainer>
);
};

export default Main;
