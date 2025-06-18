import React from "react";
import { StyledButton } from "./style";

interface ButtonProps {
    children: React.ReactNode
    ariaLabel: string;
    onClick: () => void;
}

export default function Button({ children, ariaLabel, onClick }: ButtonProps) {
    return (
            <StyledButton onClick={onClick} aria-label={ariaLabel}>
                {children}
            </StyledButton>
)}
