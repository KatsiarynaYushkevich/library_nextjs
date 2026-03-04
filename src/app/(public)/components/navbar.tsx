import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="w-full bg-white h-[70px]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="shrink-0">
            <Link href="/">
              <span className="text-xl font-bold text-gray-800">Library</span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link href="/authors" className="text-gray-700 hover:text-gray-900">
              Авторы
            </Link>
            <Link href="/books" className="text-gray-700 hover:text-gray-900">
              Книги
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-gray-900">☰</button>
          </div>
        </div>
      </div>
    </nav>
  )
}
