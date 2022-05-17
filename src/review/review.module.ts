import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';

import { ReviewModel } from './review.model';
import { ReviewController } from './review.controller';

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
	controllers: [ReviewController]
})
export class ReviewModule {}
