import { ReactNode } from "react"
import Navbar from "./components/navbar"

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-dvh grid grid-row-2 gap-4 justify-center">
      <Navbar />
      <div className="w-4/5 sm:w-3/4 md:w-2/3 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mx-auto">
        {children}
      </div>
    </div>
  )
}
