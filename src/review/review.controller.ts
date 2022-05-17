import { 
	Body, 
	Controller, 
	Delete, 
	Get, 
	HttpException, 
	HttpStatus, 
	Param, 
	Post 
} from '@nestjs/common';

import { 
	CreateProductDto
} from 'src/products/dto/create-product.dto';
import { ReviewService } from './review.service';
import { REVIEW_NOT_FOUND } from './review.constants';

@Controller('review')
export class ReviewController {
	constructor(
		private readonly reviewService: ReviewService
	) {}

	@Post('create')
	async create(@Body() dto: CreateProductDto) {
		return this.reviewService.create(dto);
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {
		const deleteDoc = await this.reviewService.delete(id);
		if (!deleteDoc) {
			throw new HttpException(
				REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND
			);
		}
		return deleteDoc;
	}

	@Get('byProduct/:productId')
	async getByProduct(@Param('productId') productId: string) {
		return this.reviewService.getByProduct(productId);
	}
}
