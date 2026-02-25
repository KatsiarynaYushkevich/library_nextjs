import { ItemCardProps } from "./itemCard"

export default function CardTitle({ children, className }: ItemCardProps) {
  return <h3 className={`font-bold ${className ?? ""}`}>{children}</h3>
}
