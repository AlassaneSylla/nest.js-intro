import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductsModule } from './products/products.module';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [
    ProductsModule,],
  controllers: [
    ProductsController, AppController],
  providers: [
    ProductsService, AppService],
})
export class AppModule { }
