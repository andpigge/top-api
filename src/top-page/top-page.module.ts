import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';

import { TopPageModel } from './top-page.model';
import { TopPageController } from './top-page.controller';

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: TopPageModel,
				schemaOptions: {
					collection: 'Top-page'
				}
			}
		])
	],
	controllers: [TopPageController]
})
export class TopPageModule {}
