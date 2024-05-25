import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe('App component', () => {
    it("should render app with hello message", () => {
        render(<App />);

        screen.getByText("Hello world!");
    })

    it("should change message on button click", () => {
        render(<App />);

        screen.getByText("Let's learn more about testing in React");

        const button = screen.getByText(/change message/i);

        fireEvent.click(button);

        screen.getByText(/new message/i)
    })
})

export default {};