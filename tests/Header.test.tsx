import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';

test('renderiza título do header', () => {
    render(<Header />);
    expect(screen.getByText(/bem-vindo/i)).toBeInTheDocument();
});
