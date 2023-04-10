import { render, screen } from '@testing-library/react';
import Card from "./Card";

describe("Card component renders", () => {
    test("Component contains all required fields: card name", () => {
        const { container } = render(<Card cardName="Some Card" cardImageSource="#"/>);

        expect(container.querySelector(".card-name")).toBeInTheDocument();
    });

    test("Component contains all required fields: card image", () => {
        const { container } = render(<Card cardName="Some Card" cardImageSource="#" />);

        expect(container.querySelector(".card-image")).toBeInTheDocument();
    });
});