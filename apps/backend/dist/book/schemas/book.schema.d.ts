import { User } from '../../auth/schemas/user.schemas';
import mongoose from 'mongoose';
export declare enum Category {
    ADVENTURE = "Adventure",
    CALSSICS = "Classics",
    CRIME = "Crime",
    FANTASY = "Fantasy"
}
export declare class Book {
    title: string;
    description: string;
    author: string;
    price: number;
    category: Category;
    user: User;
}
export declare const BookSchema: mongoose.Schema<Book, mongoose.Model<Book, any, any, any, mongoose.Document<unknown, any, Book> & Book & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Book, mongoose.Document<unknown, {}, Book> & Book & {
    _id: mongoose.Types.ObjectId;
}>;
