import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiParam,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { FilmService } from './film.service.js';
import { FilmQueryDto } from './dto/film-query.dto.js';
import { FilmDetailDto, FilmListResponseDto } from './dto/film-response.dto.js';

@ApiTags('films')
@Controller('films')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Get()
  @ApiOperation({
    summary: '查询电影列表',
    description: '支持按标题、上映年份、评分筛选，并支持分页',
  })
  @ApiOkResponse({
    description: '成功返回电影列表',
    type: FilmListResponseDto,
  })
  findAll(@Query() query: FilmQueryDto) {
    return this.filmService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({
    summary: '获取单个电影详情',
    description: '根据电影ID获取详细信息，包括演员和分类',
  })
  @ApiParam({ name: 'id', description: '电影ID', example: 1 })
  @ApiOkResponse({ description: '成功返回电影详情', type: FilmDetailDto })
  @ApiNotFoundResponse({ description: '电影不存在' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.filmService.findOne(id);
  }
}
