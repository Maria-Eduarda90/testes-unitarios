import { Product } from "../../product";

export interface ICardTwo<T> {
    addItem(item: Product): void;
    removeItem(item: Product): void;
    get items(): readonly T[];
    total(): number;
    isEmpty(): boolean;
    clear(): void;
}
