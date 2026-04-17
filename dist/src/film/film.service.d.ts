import { PrismaService } from '../prisma/prisma.service';
import { FilmQueryDto } from './dto/film-query.dto';
export declare class FilmService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(query: FilmQueryDto): Promise<{
        data: {
            language: {
                name: string;
            };
            description: string | null;
            title: string;
            rating: import("@prisma/client").$Enums.mpaa_rating | null;
            film_id: number;
            release_year: number | null;
            rental_rate: import("@prisma/client-runtime-utils").Decimal;
            length: number | null;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
            hasNextPage: boolean;
            hasPrevPage: boolean;
        };
    }>;
}
