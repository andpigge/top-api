import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';

import { ReviewModel } from './review.model';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';

@Module({
		imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: ReviewModel,
				schemaOptions: {
					collection: 'Review'
				}
			}
		])
	],
	controllers: [ReviewController],
	providers: [ReviewService]
})
export class ReviewModule {}
