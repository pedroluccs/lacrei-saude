import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button/Button';

describe('Button component', () => {
it('renders the button with aria-label and handles click', () => {
const handleClick = jest.fn();

render(<Button ariaLabel="Test Button" onClick={handleClick}>Clique aqui</Button>);

const button = screen.getByRole('button', { name: /test button/i });
expect(button).toBeInTheDocument();

fireEvent.click(button);
expect(handleClick).toHaveBeenCalled();
});
});