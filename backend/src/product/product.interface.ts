import { Product } from ".";

export interface ProductRepositoryInterface {
    findAll(): Product[];
    save(name: string, price: number): Product;
}
