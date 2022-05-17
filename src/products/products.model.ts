import { prop } from '@typegoose/typegoose';
import { 
	TimeStamps 
} from '@typegoose/typegoose/lib/defaultClasses';

export class ProductsModel extends TimeStamps {

	@prop()
	title : string;

	@prop()
	price : number;
}
