import { ItemCardProps } from "./itemCard"

export default function CardDescription({ children, className }: ItemCardProps) {
  return <p className={` ${className ?? ""}`}>{children}</p>
}
