import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button/Button';

test('botão aciona função ao clicar', () => {
    const mockFn = jest.fn();
    render(<Button label="Clique aqui" onClick={mockFn} />);
    fireEvent.click(screen.getByText(/clique aqui/i));
    expect(mockFn).toHaveBeenCalled();
});
