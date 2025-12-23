import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './health/health.module';
import { PrintJobModule } from './print-job/print-job.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { DesignsModule } from './designs/designs.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HealthModule,
    PrintJobModule,
    UsersModule,
    AuthModule,
    ProductsModule,
    DesignsModule
  ],
})
export class AppModule {}
