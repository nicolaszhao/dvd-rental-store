"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmListResponseDto = exports.PaginationMetaDto = exports.FilmDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class LanguageDto {
    name;
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: '语言名称', example: 'English' }),
    __metadata("design:type", String)
], LanguageDto.prototype, "name", void 0);
class FilmDto {
    film_id;
    title;
    description;
    release_year;
    rating;
    rental_rate;
    length;
    language;
}
exports.FilmDto = FilmDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '电影ID', example: 1 }),
    __metadata("design:type", Number)
], FilmDto.prototype, "film_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '电影标题', example: 'Academy Dinosaur' }),
    __metadata("design:type", String)
], FilmDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '电影简介',
        example: 'A Epic Drama of a Feminist And a Mad Scientist...',
    }),
    __metadata("design:type", String)
], FilmDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '上映年份', example: 2006 }),
    __metadata("design:type", Number)
], FilmDto.prototype, "release_year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'MPAA 评分',
        enum: ['G', 'PG', 'PG_13', 'R', 'NC_17'],
        example: 'PG',
    }),
    __metadata("design:type", String)
], FilmDto.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '租赁价格', example: '0.99' }),
    __metadata("design:type", String)
], FilmDto.prototype, "rental_rate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '片长（分钟）', example: 86 }),
    __metadata("design:type", Number)
], FilmDto.prototype, "length", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '语言信息', type: LanguageDto }),
    __metadata("design:type", LanguageDto)
], FilmDto.prototype, "language", void 0);
class PaginationMetaDto {
    total;
    page;
    limit;
    totalPages;
    hasNextPage;
    hasPrevPage;
}
exports.PaginationMetaDto = PaginationMetaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '总记录数', example: 1000 }),
    __metadata("design:type", Number)
], PaginationMetaDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '当前页码', example: 1 }),
    __metadata("design:type", Number)
], PaginationMetaDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '每页数量', example: 10 }),
    __metadata("design:type", Number)
], PaginationMetaDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '总页数', example: 100 }),
    __metadata("design:type", Number)
], PaginationMetaDto.prototype, "totalPages", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '是否有下一页', example: true }),
    __metadata("design:type", Boolean)
], PaginationMetaDto.prototype, "hasNextPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '是否有上一页', example: false }),
    __metadata("design:type", Boolean)
], PaginationMetaDto.prototype, "hasPrevPage", void 0);
class FilmListResponseDto {
    data;
    meta;
}
exports.FilmListResponseDto = FilmListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '电影列表', type: [FilmDto] }),
    __metadata("design:type", Array)
], FilmListResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '分页元数据', type: PaginationMetaDto }),
    __metadata("design:type", PaginationMetaDto)
], FilmListResponseDto.prototype, "meta", void 0);
//# sourceMappingURL=film-response.dto.js.map