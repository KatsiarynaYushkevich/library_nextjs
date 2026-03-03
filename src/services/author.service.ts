import { connectDB } from "@lib/db"
import { Author, IAuthor, IAuthorSerialized } from "@models/author"
import { cacheLife, cacheTag } from "next/cache"

export async function getAuthors(): Promise<IAuthorSerialized[]> {
  "use cache"

  cacheTag("authors")
  cacheLife({ revalidate: 120 })
  await connectDB()

  const authors = await Author.find().lean<IAuthor[]>()
  const serializedAuthors: IAuthorSerialized[] = authors.map((author) => ({
    ...author,
    _id: author._id.toString(),
    createdAt: author.createdAt.toISOString(),
    updatedAt: author.updatedAt.toISOString(),
  }))

  return serializedAuthors
}
