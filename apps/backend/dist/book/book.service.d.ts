import { Book } from './schemas/book.schema';
import * as mongoose from 'mongoose';
import { Query } from 'express-serve-static-core';
import { User } from '../auth/schemas/user.schemas';
export declare class BookService {
    private bookModel;
    constructor(bookModel: mongoose.Model<Book>);
    findAll(query: Query): Promise<Book[]>;
    create(book: Book, user: User): Promise<Book>;
    findById(id: string): Promise<Book>;
    updateById(id: string, book: Book): Promise<Book>;
    deleteById(id: string): Promise<Book>;
}
