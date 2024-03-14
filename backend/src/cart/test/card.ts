import { Product } from "../../product";
import { ICardTwo } from "./card.interface";

type ITEM_CARD = {
    product: Product;
    qtd: number;
};

export class CartTwo implements ICardTwo<ITEM_CARD> {
    private readonly _items: ITEM_CARD[] = [];

    addItem(product: Product): void {
        const index = this._items.findIndex((item) => {
            return product === item.product;
        });

        if (index !== -1) {
            const qtd = this.items[index].qtd + 1;
            this._items[index] = {
                product,
                qtd,
            };

            return;
        }

        this._items.push({
            product,
            qtd: 1,
        });
    }

    removeItem(product: Product): void {
        this._items.map((item, index) => {
            if (product === item.product) {
                this._items.slice(index, 1);
            }
        });
    }

    get items(): readonly ITEM_CARD[] {
        return this._items;
    }

    total(): number {
        let total = 0;

        this._items.map((item) => {
            total += item.product.price * item.qtd;
        });

        return total;
    }

    isEmpty(): boolean {
        return this._items.length === 0;
    }

    clear(): void {
        this._items.length = 0;
    }
}
