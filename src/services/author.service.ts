"use cache"
import { connectDB } from "@lib/db"
import { Author, IAuthor, IAuthorSerialized } from "@models/author"
import { cacheLife } from "next/cache"

export async function getAuthors(): Promise<IAuthorSerialized[]> {
  cacheLife("hours")

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
