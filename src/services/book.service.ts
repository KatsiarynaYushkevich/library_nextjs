import { connectDB } from "@lib/db"
import { Book, IBook, IBookSerialized } from "@models/book"
import { Types } from "mongoose"
import { cacheLife, cacheTag } from "next/cache"

export async function getBooks(): Promise<IBookSerialized[]> {
  "use cache"
  cacheTag("books")
  cacheLife({ revalidate: 60 })

  await connectDB()
  const books = await Book.find().lean<IBook[]>().exec()

  const serializedBooks: IBookSerialized[] = books.map((book) => ({
    ...book,
    _id: book._id.toString(),
    authorId: (book.authorId as Types.ObjectId).toString(),
    createdAt: book.createdAt.toISOString(),
    updatedAt: book.updatedAt.toISOString(),
  }))

  return serializedBooks
}
