import { getBooks } from "@services/book.service"
import { IBook } from "@models/book"
import ItemCard from "@components/card/itemCard"
import { StarIcon } from "@heroicons/react/24/outline"

export default async function BookPage() {
  const books = await getBooks()
  return (
    <>
      {books.map((book: IBook) => (
        <ItemCard
          key={book._id}
          className="bg-gray-800 rounded-2xl p-4 border border-gray-700 
             flex flex-col gap-3 min-h-[40dvh] shadow-lg hover:shadow-xl 
             transition-all duration-300"
        >
          <ItemCard.Title
            className="text-lg font-semibold text-center 
               line-clamp-2 min-h-12"
          >
            {book.title}
          </ItemCard.Title>

          <div className="flex gap-4 justify-between">
            <div className="w-1/2">
              <ItemCard.Image src={book.imageUrl} alt={book.title} isFullSize />
            </div>

            <div className="flex flex-col gap-1 align-center">
              <span className="text-gray-400">{book.year}</span>
              <div className="flex flex-wrap gap-1">
                {book.genres.map((genre) => (
                  <span key={genre} className="text-xs bg-gray-700 px-2 py-1 rounded-md">
                    {genre}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <StarIcon className="w-6 h-6 text-yellow-500" />
                <span className="font-medium text-yellow-400">{book.rating}</span>
              </div>
            </div>
          </div>
          <ItemCard.Description className="text-gray-400 text-sm line-clamp-3 flex-1 wrap-break-word">
            {book.description}
          </ItemCard.Description>
        </ItemCard>
      ))}
    </>
  )
}
