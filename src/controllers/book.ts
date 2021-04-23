import { Request, Response } from "express";
import Book from "../models/book";

const getAllBooks = (_: Request, res: Response) => {
  Book.find()
    .exec()
    .then((results) => {
      return res.status(200).json({
        books: results,
        count: results.length,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

const getBook = (req: Request, res: Response) => {
  console.log(req, res);
};

const addBook = (req: Request, res: Response) => {
  console.log(req, res);
};

const updateBook = (req: Request, res: Response) => {
  console.log(req, res);
};

const deleteBook = (req: Request, res: Response) => {
  console.log(req, res);
};

export { getAllBooks, getBook, addBook, updateBook, deleteBook };
