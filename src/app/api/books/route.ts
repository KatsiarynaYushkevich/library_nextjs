import { NextResponse } from "next/server"
import { getBooks } from "@services/book.service"

export async function GET() {
  try {
    const books = await getBooks()
    return NextResponse.json(books)
  } catch {
    return NextResponse.json({ message: "Failed to fetch books" }, { status: 500 })
  }
}
