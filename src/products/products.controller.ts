import { 
	Body, 
	Controller, 
	Delete, 
	Get, 
	HttpCode,
	HttpStatus, 
	Param, 
	Post, 
	Put 
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

	constructor(
		private readonly productsService: ProductsService
	) {}

	@Get()
	async getAll() {
		return this.productsService.getAll();
	}

	@Get(':id')
	async getOne(@Param('id') id: string) {
		return this.productsService.getById(id);
	}

	@HttpCode(HttpStatus.CREATED)
	@Post()
	async create(@Body() dto: CreateProductDto) {
		return this.productsService.create(dto);
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {
		return this.productsService.delete(id);
	}

	@Put(':id')
	update(@Body('id') dto: CreateProductDto, @Param('id') id: string) {
		return `Update ${id}`;
	}
}
