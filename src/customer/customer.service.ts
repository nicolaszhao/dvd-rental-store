import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CustomerQueryDto } from './dto/customer-query.dto';

@Injectable()
export class CustomerService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(query: CustomerQueryDto) {
    const { lastName, email, page = 1, limit = 10 } = query;

    const where = {
      ...(lastName && {
        last_name: {
          contains: lastName,
          mode: 'insensitive' as const,
        },
      }),
      ...(email && {
        email: {
          contains: email,
          mode: 'insensitive' as const,
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
}
