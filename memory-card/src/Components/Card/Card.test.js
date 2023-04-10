import { render, screen } from '@testing-library/react';
import Card from "./Card";

describe("Card component renders", () => {
    const { container } = render(<Card cardName="Some Card" cardImageSource="#"/>);

    test("Component contains all required fields: card name", () => {
        expect(container.querySelector(".card-name")).toBeInTheDocument();
    });

    test("Component contains all required fields: card image", () => {
        expect(container.querySelector(".card-image")).toBeInTheDocument();
    });
});