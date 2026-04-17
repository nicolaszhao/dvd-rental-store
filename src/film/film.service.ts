import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { FilmQueryDto } from './dto/film-query.dto.js';

@Injectable()
export class FilmService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(query: FilmQueryDto) {
    const { title, releaseYear, rating, page = 1, limit = 10 } = query;

    const where = {
      ...(title && {
        title: {
          contains: title,
          mode: 'insensitive' as const,
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
}
