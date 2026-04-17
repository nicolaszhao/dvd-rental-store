import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';
import { CustomerService } from './customer.service.js';
import { CustomerQueryDto } from './dto/customer-query.dto.js';
import { CustomerListResponseDto } from './dto/customer-response.dto.js';

@ApiTags('customers')
@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  @ApiOperation({
    summary: '查询客户列表',
    description: '支持按姓氏、邮箱筛选，并支持分页',
  })
  @ApiOkResponse({
    description: '成功返回客户列表',
    type: CustomerListResponseDto,
  })
  findAll(@Query() query: CustomerQueryDto) {
    return this.customerService.findAll(query);
  }
}
