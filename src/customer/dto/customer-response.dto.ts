import { ApiProperty } from '@nestjs/swagger';

class AddressDto {
  @ApiProperty({ description: '地址', example: '1913 Hanoi Way' })
  address: string;

  @ApiProperty({ description: '区域', example: 'Nagasaki' })
  district: string;

  @ApiProperty({ description: '电话', example: '28303384290' })
  phone: string;
}

export class CustomerDto {
  @ApiProperty({ description: '客户ID', example: 1 })
  customer_id: number;

  @ApiProperty({ description: '名', example: 'Mary' })
  first_name: string;

  @ApiProperty({ description: '姓', example: 'Smith' })
  last_name: string;

  @ApiProperty({ description: '邮箱', example: 'mary.smith@example.com', nullable: true })
  email: string | null;

  @ApiProperty({ description: '是否激活', example: true })
  activebool: boolean;

  @ApiProperty({ description: '创建日期', example: '2006-02-14' })
  create_date: Date;

  @ApiProperty({ description: '地址信息', type: AddressDto })
  address: AddressDto;
}

export class PaginationMetaDto {
  @ApiProperty({ description: '总记录数', example: 599 })
  total: number;

  @ApiProperty({ description: '当前页码', example: 1 })
  page: number;

  @ApiProperty({ description: '每页数量', example: 10 })
  limit: number;

  @ApiProperty({ description: '总页数', example: 60 })
  totalPages: number;

  @ApiProperty({ description: '是否有下一页', example: true })
  hasNextPage: boolean;

  @ApiProperty({ description: '是否有上一页', example: false })
  hasPrevPage: boolean;
}

export class CustomerListResponseDto {
  @ApiProperty({ description: '客户列表', type: [CustomerDto] })
  data: CustomerDto[];

  @ApiProperty({ description: '分页元数据', type: PaginationMetaDto })
  meta: PaginationMetaDto;
}
