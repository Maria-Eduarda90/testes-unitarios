import { render, screen } from "@testing-library/react";
import App from "./App";

describe('App component', () => {
    it("should render app with hello message", () => {
        render(<App />);

        screen.getByText("Hello world!");
    })
})

export default {};