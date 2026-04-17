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
exports.FilmService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FilmService = class FilmService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(query) {
        const { title, releaseYear, rating, page = 1, limit = 10 } = query;
        const where = {
            ...(title && {
                title: {
                    contains: title,
                    mode: 'insensitive',
                },
            }),
            ...(releaseYear && {
                release_year: releaseYear,
            }),
            ...(rating && {
                rating: rating,
            }),
        };
        const [data, total] = await Promise.all([
            this.prisma.film.findMany({
                where,
                select: {
                    film_id: true,
                    title: true,
                    description: true,
                    release_year: true,
                    rating: true,
                    rental_rate: true,
                    length: true,
                    language: {
                        select: {
                            name: true,
                        },
                    },
                },
                orderBy: {
                    title: 'asc',
                },
                skip: (page - 1) * limit,
                take: limit,
            }),
            this.prisma.film.count({ where }),
        ]);
        const totalPages = Math.ceil(total / limit);
        return {
            data,
            meta: {
                total,
                page,
                limit,
                totalPages,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1,
            },
        };
    }
};
exports.FilmService = FilmService;
exports.FilmService = FilmService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FilmService);
//# sourceMappingURL=film.service.js.map