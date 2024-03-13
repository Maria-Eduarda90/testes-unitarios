import { Cart } from "./index";
import { Product } from "../product";

describe("Cart", () => {
    it.only("should empty cart", () => {
        const cart = new Cart();
        expect(cart.items.length).toBe(0);
    });

    it("should has one item in cart", () => {
        const cart = new Cart();
        const prod1 = new Product("mangá", 22);
        cart.addItem(prod1);
    });
});
