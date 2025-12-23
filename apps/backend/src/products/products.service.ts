import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  create(dto: CreateProductDto): Product {
    const product: Product = {
      id: uuid(),
      name: dto.name,
      type: dto.type,
      basePrice: dto.basePrice,
      isActive: true,
      createdAt: new Date(),
    };

    this.products.push(product);
    return product;
  }

  findAll(): Product[] {
    return this.products.filter(p => p.isActive);
  }
}
