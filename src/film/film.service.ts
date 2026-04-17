import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { FilmQueryDto } from './dto/film-query.dto.js';

@Injectable()
export class FilmService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: number) {
    const film = await this.prisma.film.findUnique({
      where: { film_id: id },
      select: {
        film_id: true,
        title: true,
        description: true,
        release_year: true,
        rating: true,
        rental_rate: true,
        rental_duration: true,
        replacement_cost: true,
        length: true,
        special_features: true,
        language: { select: { name: true } },
        film_actor: {
          select: {
            actor: {
              select: { actor_id: true, first_name: true, last_name: true },
            },
          },
        },
        film_category: {
          select: { category: { select: { name: true } } },
        },
      },
    });

    if (!film) {
      throw new NotFoundException(`Film #${id} not found`);
    }

    return {
      ...film,
      actors: film.film_actor.map((fa) => fa.actor),
      categories: film.film_category.map((fc) => fc.category.name),
      film_actor: undefined,
      film_category: undefined,
    };
  }

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
