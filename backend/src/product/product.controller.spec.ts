import { Product } from ".";
import { ProductController } from "./product.controller";
import { ProductRepositoryInterface } from "./product.interface";

const makeSut = () => {
    // class ProductRepositorySQL implements ProductRepositoryInterface {
    //     findAll(): Product[] {
    //         return [];
    //     }
    //     save(name: string, price: number): Product {
    //         throw new Error("not implemented");
    //     }
    // }

    const mockRepository: jest.Mocked<ProductRepositoryInterface> = {
        findAll: jest.fn(),
        save: jest.fn(),
    };

    const sut = new ProductController(mockRepository);

    return {
        sut,
        mockRepository,
    };
};

describe("ProductController", () => {
    it("should return all products", () => {
        const { sut, mockRepository } = makeSut();
        sut.getAll();
        expect(mockRepository.findAll).toBeCalledTimes(1);
    });

    it("should save products", () => {
        const { sut, mockRepository } = makeSut();
        const name = "prod1";
        const price = 12;
        sut.store(name, price);
        expect(mockRepository.save).toBeCalledTimes(1);
        expect(mockRepository.save).toHaveBeenCalledWith(name, price);
    });
});
