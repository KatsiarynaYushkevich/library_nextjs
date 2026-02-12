import { getBooks } from "@services/book.service"
import { IBook } from "@models/book"

export default async function Home() {
  const books = await getBooks()

  return (
    <div>
      {books.map((book: IBook) => (
        <div key={book._id}>{book.title}</div>
      ))}
    </div>
  )
}
