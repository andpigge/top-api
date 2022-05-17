import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';

import { ProductsModel } from './products.model';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
	controllers: [ProductsController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: ProductsModel,
				schemaOptions: {
					collection: 'products'
				}
			}
		])
	],
	providers: [ProductsService],
})
export class ProductsModule { }
