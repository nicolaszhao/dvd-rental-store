import { ApiProperty } from '@nestjs/swagger';

class LanguageDto {
  @ApiProperty({ description: '语言名称', example: 'English' })
  name: string;
}

export class FilmDto {
  @ApiProperty({ description: '电影ID', example: 1 })
  film_id: number;

  @ApiProperty({ description: '电影标题', example: 'Academy Dinosaur' })
  title: string;

  @ApiProperty({
    description: '电影简介',
    example: 'A Epic Drama of a Feminist And a Mad Scientist...',
  })
  description: string;

  @ApiProperty({ description: '上映年份', example: 2006 })
  release_year: number;

  @ApiProperty({
    description: 'MPAA 评分',
    enum: ['G', 'PG', 'PG_13', 'R', 'NC_17'],
    example: 'PG',
  })
  rating: string;

  @ApiProperty({ description: '租赁价格', example: '0.99' })
  rental_rate: string;

  @ApiProperty({ description: '片长（分钟）', example: 86 })
  length: number;

  @ApiProperty({ description: '语言信息', type: LanguageDto })
  language: LanguageDto;
}

class ActorDto {
  @ApiProperty({ description: '演员ID', example: 1 })
  actor_id: number;

  @ApiProperty({ description: '名', example: 'Penelope' })
  first_name: string;

  @ApiProperty({ description: '姓', example: 'Guiness' })
  last_name: string;
}

export class FilmDetailDto extends FilmDto {
  @ApiProperty({ description: '租赁时长（天）', example: 6 })
  rental_duration: number;

  @ApiProperty({ description: '替换费用', example: '20.99' })
  replacement_cost: string;

  @ApiProperty({
    description: '特殊功能',
    example: ['Deleted Scenes', 'Behind the Scenes'],
  })
  special_features: string[];

  @ApiProperty({ description: '演员列表', type: [ActorDto] })
  actors: ActorDto[];

  @ApiProperty({ description: '分类', example: ['Documentary'] })
  categories: string[];
}

export class PaginationMetaDto {
  @ApiProperty({ description: '总记录数', example: 1000 })
  total: number;

  @ApiProperty({ description: '当前页码', example: 1 })
  page: number;

  @ApiProperty({ description: '每页数量', example: 10 })
  limit: number;

  @ApiProperty({ description: '总页数', example: 100 })
  totalPages: number;

  @ApiProperty({ description: '是否有下一页', example: true })
  hasNextPage: boolean;

  @ApiProperty({ description: '是否有上一页', example: false })
  hasPrevPage: boolean;
}

export class FilmListResponseDto {
  @ApiProperty({ description: '电影列表', type: [FilmDto] })
  data: FilmDto[];

  @ApiProperty({ description: '分页元数据', type: PaginationMetaDto })
  meta: PaginationMetaDto;
}
