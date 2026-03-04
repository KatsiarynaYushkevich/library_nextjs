import { IAuthorSerialized } from "@models/author"
import ItemCard from "@components/card/itemCard"
import { getAuthors } from "@services/author.service"

export default async function AuthorsPage() {
  const authors = await getAuthors()
  return (
    <div className="w-4/5 sm:w-3/4 md:w-2/3 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mx-auto">
      {authors.map((author: IAuthorSerialized) => (
        <ItemCard
          key={author._id}
          className="
          bg-gray-950
    rounded-2xl overflow-hidden
    shadow-md hover:shadow-xl
    transition-all duration-300
    flex flex-col min-h-[20]
    border-2 border-amber-600
  "
        >
          <div className="aspect-4/3 overflow-hidden">
            <ItemCard.Image src={author.imageUrl} alt={author.name} isFullSize />
          </div>

          <div className="p-5 flex flex-col flex-1">
            <ItemCard.Title className="text-xl font-semibold text-center">
              {author.name}
            </ItemCard.Title>

            <ItemCard.Description className="text-gray-600 text-sm mt-3 line-clamp-4 flex-1 text-justify">
              {author.bio}
            </ItemCard.Description>
          </div>
        </ItemCard>
      ))}
    </div>
  )
}
