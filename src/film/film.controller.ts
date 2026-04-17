import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';
import { FilmService } from './film.service.js';
import { FilmQueryDto } from './dto/film-query.dto.js';
import { FilmListResponseDto } from './dto/film-response.dto.js';

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
}
