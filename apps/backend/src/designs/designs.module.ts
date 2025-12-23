import { Module } from '@nestjs/common';
import { DesignsService } from './designs.service';
import { DesignsController } from './designs.controller';

@Module({
  providers: [DesignsService],
  controllers: [DesignsController]
})
export class DesignsModule {}
