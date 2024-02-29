import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ProductService } from './services/product.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('/create')
  @ApiResponse({
    status: 201,
    description: 'O produto foi adicionado no sistema!',
  })
  @ApiBody({ type: CreateProductDTO })
  create(@Body() dto: CreateProductDTO) {
    return this.productService.create(dto);
  }

  @ApiResponse({
    status: 200,
    description: 'Os detalhes do produto foram encontrados!',
  })
  @ApiParam({
    name: 'id',
    description: 'Identificador(uuid) do produto.',
  })
  @Get(':id')
  findOne(@Param() params: any) {
    return this.productService.findOneByUuid(params.id);
  }

  @ApiResponse({
    status: 200,
    description: 'Todos os produtos foram listados!',
  })
  @Get('/')
  findAll() {
    return this.productService.findAll();
  }
}
