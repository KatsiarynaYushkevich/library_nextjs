import Image from "next/image"

export interface CardImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  isFullSize?: boolean
}

export default function CardImage({ src, alt, width, height, isFullSize }: CardImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 100}
      height={height ?? 100}
      className={`${isFullSize ? "w-full h-full" : ""}`}
    />
  )
}
