import { Product } from "../product";

export interface ICard {
    addItem(item: Product): void;
    removeItem(item: Product): void;
    get items(): readonly Product[];
    total(): number;
    isEmpty(): boolean;
    clear(): void;
}
