declare class LanguageDto {
    name: string;
}
export declare class FilmDto {
    film_id: number;
    title: string;
    description: string;
    release_year: number;
    rating: string;
    rental_rate: string;
    length: number;
    language: LanguageDto;
}
export declare class PaginationMetaDto {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}
export declare class FilmListResponseDto {
    data: FilmDto[];
    meta: PaginationMetaDto;
}
export {};
