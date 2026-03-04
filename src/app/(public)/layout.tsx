import { ReactNode } from "react"
import Navbar from "./components/navbar"

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-dvh grid grid-rows-[auto_1fr] gap-4">
      <Navbar />
      {children}
    </div>
  )
}
