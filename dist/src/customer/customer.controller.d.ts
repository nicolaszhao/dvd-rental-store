import { CustomerService } from './customer.service';
import { CustomerQueryDto } from './dto/customer-query.dto';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    findAll(query: CustomerQueryDto): Promise<{
        data: {
            address: {
                address: string;
                district: string;
                phone: string;
            };
            email: string | null;
            customer_id: number;
            first_name: string;
            last_name: string;
            activebool: boolean;
            create_date: Date;
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
