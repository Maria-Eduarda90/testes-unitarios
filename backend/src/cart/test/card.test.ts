import { CartTwo } from "./card";
import { Product } from "../../product";

const makeCart = (): CartTwo => {
    return new CartTwo();
};

const makeProduct = (name: string, price: number): Product => {
    return new Product(name, price);
};

const makeSut = () => {
    const stu = makeCart();

    return {
        stu,
    };
};

describe("Cart", () => {
    it.only("should empty cart", () => {
        const { stu } = makeSut();
        expect(stu.items.length).toBe(0);
    });

    it("should has one item in cart", () => {
        const { stu } = makeSut();
        expect(stu.items.length).toBe(0);
        stu.addItem(makeProduct("mangá", 22));
        stu.addItem(makeProduct("mangá", 22));
        expect(stu.items.length).toBe(2);
    });

    it("should has one item in cart, and add same product one", () => {
        const { stu } = makeSut();
        expect(stu.items.length).toBe(0);
        const product1 = makeProduct("mangá", 22);
        const product2 = makeProduct("mangá", 22);
        stu.addItem(product1);
        stu.addItem(product2);
        expect(stu.items.length).toBe(2);
        stu.addItem(product1);
        expect(stu.items.length).toBe(2);
        expect(stu.items[0].product).toBe(product1);
        expect(stu.items[1].product).toBe(product2);
    });

    it("should have one item if add two and remove one", () => {
        const { stu } = makeSut();
        const product1 = makeProduct("mangá2", 15);
        const product2 = makeProduct("mangá1", 22);
        expect(stu.items.length).toBe(2);
        stu.removeItem(product1);
        stu.removeItem(product2);
        expect(stu.isEmpty).toBeTruthy();
    });

    it("should total equals 10, with two products", () => {
        const { stu } = makeSut();
        const product1 = makeProduct("mangá1", 20);
        const product2 = makeProduct("mangá2", 10);
        stu.addItem(product1);
        stu.addItem(product1);
        stu.addItem(product1);
        stu.addItem(product2);
        expect(stu.total()).toBe(70);
    });

    it("should total equals 0, with empty cart", () => {
        const { stu } = makeSut();
        expect(stu.total()).toBe(0);
    });

    it("should clear cart", () => {
        const { stu } = makeSut();
        stu.addItem(makeProduct("mangá", 10));
        stu.addItem(makeProduct("mangá2", 10));
        stu.clear();
        expect(stu.isEmpty).toBeTruthy();
    });
});
