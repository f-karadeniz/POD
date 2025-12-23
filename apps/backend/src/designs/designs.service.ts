import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

export type Design = {
  id: string;
  userId: string;
  productId: string;
  variantId: string;
  imageUrl: string;
  createdAt: Date;
};

@Injectable()
export class DesignsService {
  private designs: Design[] = [];

  create(data: Omit<Design, 'id' | 'createdAt'>) {
    const design: Design = {
      id: randomUUID(),
      createdAt: new Date(),
      ...data,
    };

    this.designs.push(design);
    return design;
  }

  findAll() {
    return this.designs;
  }

  findByUser(userId: string) {
    return this.designs.filter(d => d.userId === userId);
  }
}
