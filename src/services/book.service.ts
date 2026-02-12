import { connectDB } from "@lib/db"
import { Book, IBook } from "@models/book"

export async function getBooks() {
  await connectDB()

  return Book.find().lean<IBook[]>()
}
