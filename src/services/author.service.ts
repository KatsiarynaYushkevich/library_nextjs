import { connectDB } from "@lib/db"
import { Author, IAuthor } from "@models/author"
import { cacheLife, cacheTag } from "next/cache"

export async function getAuthors() {
  "use cache"

  cacheTag("authors")
  cacheLife({ revalidate: 120 })
  await connectDB()

  return Author.find().lean<IAuthor[]>()
}
