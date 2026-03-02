import { cacheLife, cacheTag } from "next/cache"
import { Book, IBook } from "@models/book"
import { connectDB } from "@lib/db"

export async function getBooks() {
  "use cache"

  cacheTag("books")
  cacheLife({ revalidate: 60 })
  await connectDB()
  return Book.find().lean<IBook[]>().exec()
}
