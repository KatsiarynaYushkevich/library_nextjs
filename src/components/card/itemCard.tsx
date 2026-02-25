import CardImage from "@components/card/image"
import CardTitle from "@components/card/title"
import CardDescription from "@components/card/description"
import CardFooter from "@components/card/footer"

export interface ItemCardProps {
  children: React.ReactNode
  className?: string
}

function ItemCard({ children, className }: ItemCardProps) {
  return <div className={`${className ?? ""}`}>{children}</div>
}

ItemCard.Image = CardImage
ItemCard.Title = CardTitle
ItemCard.Description = CardDescription
ItemCard.Footer = CardFooter

export default ItemCard
