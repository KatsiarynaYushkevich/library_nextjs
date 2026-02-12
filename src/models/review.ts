import { Schema, Types, model } from "mongoose"

export interface IReview {
  bookId: Types.ObjectId
  userId: Types.ObjectId
  rating: number
  comment: string
}

export const reviewSchema = new Schema<IReview>({
  bookId: {
    type: Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
    default: 1,
  },
  comment: {
    type: String,
    default: "",
  },
})

export const Review = model<IReview>("Review", reviewSchema)
