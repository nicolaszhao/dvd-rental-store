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
exports.CustomerListResponseDto = exports.PaginationMetaDto = exports.CustomerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class AddressDto {
    address;
    district;
    phone;
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: '地址', example: '1913 Hanoi Way' }),
    __metadata("design:type", String)
], AddressDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '区域', example: 'Nagasaki' }),
    __metadata("design:type", String)
], AddressDto.prototype, "district", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '电话', example: '28303384290' }),
    __metadata("design:type", String)
], AddressDto.prototype, "phone", void 0);
class CustomerDto {
    customer_id;
    first_name;
    last_name;
    email;
    activebool;
    create_date;
    address;
}
exports.CustomerDto = CustomerDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '客户ID', example: 1 }),
    __metadata("design:type", Number)
], CustomerDto.prototype, "customer_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '名', example: 'Mary' }),
    __metadata("design:type", String)
], CustomerDto.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '姓', example: 'Smith' }),
    __metadata("design:type", String)
], CustomerDto.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '邮箱', example: 'mary.smith@example.com', nullable: true }),
    __metadata("design:type", Object)
], CustomerDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '是否激活', example: true }),
    __metadata("design:type", Boolean)
], CustomerDto.prototype, "activebool", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '创建日期', example: '2006-02-14' }),
    __metadata("design:type", Date)
], CustomerDto.prototype, "create_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '地址信息', type: AddressDto }),
    __metadata("design:type", AddressDto)
], CustomerDto.prototype, "address", void 0);
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
    (0, swagger_1.ApiProperty)({ description: '总记录数', example: 599 }),
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
    (0, swagger_1.ApiProperty)({ description: '总页数', example: 60 }),
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
class CustomerListResponseDto {
    data;
    meta;
}
exports.CustomerListResponseDto = CustomerListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '客户列表', type: [CustomerDto] }),
    __metadata("design:type", Array)
], CustomerListResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '分页元数据', type: PaginationMetaDto }),
    __metadata("design:type", PaginationMetaDto)
], CustomerListResponseDto.prototype, "meta", void 0);
//# sourceMappingURL=customer-response.dto.js.map