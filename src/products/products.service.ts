import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

import { ProductsModel } from './products.model';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
	constructor(
		@InjectModel(ProductsModel) private readonly productsModel: 
		ReturnModelType<typeof ProductsModel>
	) {}

	async getAll(): Promise<ProductsModel[]> {
		return this.productsModel.find();
	}

	async getById(
		id: string
	): Promise<ProductsModel | null> {
		return this.productsModel.findById(id);
	}

	async create(
		dto: CreateProductDto
	): Promise<ProductsModel> {
		return this.productsModel.create(dto);
	}

	async delete(
		id: string
	): Promise<ProductsModel | null> {
		return this.productsModel.findByIdAndDelete(id).exec();
	}
}
