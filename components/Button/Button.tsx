import { ButtonContainer, StyledButton } from "./style";

interface ButtonProps {
    label: string;
    onClick: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
    return (
        <ButtonContainer>
            <StyledButton onClick={onClick}>{label}</StyledButton>
        </ButtonContainer>
)}
