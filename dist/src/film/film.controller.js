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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const film_service_1 = require("./film.service");
const film_query_dto_1 = require("./dto/film-query.dto");
const film_response_dto_1 = require("./dto/film-response.dto");
let FilmController = class FilmController {
    filmService;
    constructor(filmService) {
        this.filmService = filmService;
    }
    findAll(query) {
        return this.filmService.findAll(query);
    }
};
exports.FilmController = FilmController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: '查询电影列表',
        description: '支持按标题、上映年份、评分筛选，并支持分页',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '成功返回电影列表',
        type: film_response_dto_1.FilmListResponseDto,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [film_query_dto_1.FilmQueryDto]),
    __metadata("design:returntype", void 0)
], FilmController.prototype, "findAll", null);
exports.FilmController = FilmController = __decorate([
    (0, swagger_1.ApiTags)('films'),
    (0, common_1.Controller)('films'),
    __metadata("design:paramtypes", [film_service_1.FilmService])
], FilmController);
//# sourceMappingURL=film.controller.js.map