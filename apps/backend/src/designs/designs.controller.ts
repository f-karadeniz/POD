import { Body, Controller, Get, Post, Headers, UnauthorizedException } from '@nestjs/common';
import { DesignsService } from './designs.service';

@Controller('designs')
export class DesignsController {
  constructor(private designsService: DesignsService) {}

  @Post()
  create(
    @Headers('authorization') authHeader: string,
    @Body('productId') productId: string,
    @Body('variantId') variantId: string,
    @Body('imageUrl') imageUrl: string,
  ) {
    if (!authHeader) throw new UnauthorizedException();

    const token = authHeader.replace('Bearer ', '');
    if (!token.startsWith('fake-token-')) throw new UnauthorizedException();

    const userId = token.replace('fake-token-', '');

    return this.designsService.create({
      userId,
      productId,
      variantId,
      imageUrl,
    });
  }

  @Get()
  findAll() {
    return this.designsService.findAll();
  }
}
