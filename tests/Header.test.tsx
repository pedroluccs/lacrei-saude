import { render, screen } from "@testing-library/react";
import Header from "../components/Header/Header";

describe("Header", () => {
it("renderiza título do header", () => {
render(<Header />);
const titulo = screen.getByText(/lacrei saúde/i);
expect(titulo).toBeInTheDocument();
});
});
