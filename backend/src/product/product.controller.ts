import { ProductRepositoryInterface } from "./product.interface";

export class ProductController {
    constructor(private readonly repository: ProductRepositoryInterface) {}

    getAll() {
        return this.repository.findAll();
    }

    store(name: string, price: number) {
        return this.repository.save(name, price);
    }
}
