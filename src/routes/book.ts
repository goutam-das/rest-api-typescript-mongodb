import { Router } from "express";
import {
  getAllBooks,
  getBook,
  addBook,
  deleteBook,
  updateBook,
} from "../controllers/book";

const router = Router();

router.get("/", getAllBooks);
router.get("/:bookId", getBook);
router.post("/", addBook);
router.put("/:bookId", updateBook);
router.delete("/:bookId", deleteBook);

export default router;
