declare class AddressDto {
    address: string;
    district: string;
    phone: string;
}
export declare class CustomerDto {
    customer_id: number;
    first_name: string;
    last_name: string;
    email: string | null;
    activebool: boolean;
    create_date: Date;
    address: AddressDto;
}
export declare class PaginationMetaDto {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}
export declare class CustomerListResponseDto {
    data: CustomerDto[];
    meta: PaginationMetaDto;
}
export {};
