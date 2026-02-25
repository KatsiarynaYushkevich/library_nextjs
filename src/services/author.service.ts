import { connectDB } from "@lib/db"
import { Author, IAuthor } from "@models/author"

export async function getAuthors() {
  await connectDB()

  return Author.find().lean<IAuthor[]>()
}
