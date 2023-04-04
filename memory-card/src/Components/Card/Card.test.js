import { render, screen } from '@testing-library/react';
import Card from "./Card";

describe("Card component renders", () => {
    test("Component contains all required fields: card name", () => {
        render(<Card />);

        expect(screen.getByRole('textbox', {name: "card-name"})).toBeInTheDocument();
    });

    test("Component contains all required fields: card image", () => {
        render(<Card />);

        expect(screen.getByRole('image', {name: "card-image"})).toBeInTheDocument();
    });
});