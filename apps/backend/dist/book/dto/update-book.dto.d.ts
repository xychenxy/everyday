import { Category } from '../schemas/book.schema';
import { User } from '../../auth/schemas/user.schemas';
export declare class UpdateBookDto {
    readonly title: string;
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly category: Category;
    readonly user: User;
}
