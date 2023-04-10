import { render } from '@testing-library/react';
import GameBoard from "./GameBoard";

describe("Gameboard has all necessary components", () => {    
    test("Gameboard has component: Score", () => {
        const  { container } = render(<GameBoard />);
        expect(container.querySelector(".game-score")).toBeInTheDocument();
    });
    
    test("Gameboard has component: Chances", () => {
        const  { container } = render(<GameBoard />);
        expect(container.querySelector(".game-chances")).toBeInTheDocument();
    });

    test("Gameboard has component: Instructions", () => {
        const  { container } = render(<GameBoard />);
        expect(container.querySelector(".game-instructions")).toBeInTheDocument();
    });
    
    test("Gameboard has component: Card", () => {
        const  { container } = render(<GameBoard />);
        expect(container.querySelector(".card")).toBeInTheDocument();
    });
});