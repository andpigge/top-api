import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

import { ReviewModel } from './review.model';
import { 
	CreateProductDto
} from 'src/products/dto/create-product.dto';
import { Types } from 'mongoose';

@Injectable()
export class ReviewService {
	constructor(
		@InjectModel(ReviewModel) private readonly reviewModel:
		ReturnModelType<typeof ReviewModel>
	) {}

	async create(
		dto: CreateProductDto
	): Promise<ReviewModel> {
		return this.reviewModel.create(dto);
	}

	async delete(
		id: string
	): Promise<ReviewModel | null> {
		return this.reviewModel.findByIdAndDelete(id).exec();
	}

	async getByProduct(
		productId: string
	): Promise<ReviewModel[] | null> {
		return this.reviewModel.find({
			productId: new Types.ObjectId(productId)
		}).exec();
	}
}
