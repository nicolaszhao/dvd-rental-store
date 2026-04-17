import { mpaa_rating } from '@prisma/client';
export declare class FilmQueryDto {
    title?: string;
    releaseYear?: number;
    rating?: mpaa_rating;
    page?: number;
    limit?: number;
}
