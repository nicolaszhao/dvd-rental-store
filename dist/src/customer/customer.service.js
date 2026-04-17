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
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CustomerService = class CustomerService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(query) {
        const { lastName, email, page = 1, limit = 10 } = query;
        const where = {
            ...(lastName && {
                last_name: {
                    contains: lastName,
                    mode: 'insensitive',
                },
            }),
            ...(email && {
                email: {
                    contains: email,
                    mode: 'insensitive',
                },
            }),
        };
        const [data, total] = await Promise.all([
            this.prisma.customer.findMany({
                where,
                select: {
                    customer_id: true,
                    first_name: true,
                    last_name: true,
                    email: true,
                    activebool: true,
                    create_date: true,
                    address: {
                        select: {
                            address: true,
                            district: true,
                            phone: true,
                        },
                    },
                },
                orderBy: {
                    last_name: 'asc',
                },
                skip: (page - 1) * limit,
                take: limit,
            }),
            this.prisma.customer.count({ where }),
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
exports.CustomerService = CustomerService;
exports.CustomerService = CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CustomerService);
//# sourceMappingURL=customer.service.js.map