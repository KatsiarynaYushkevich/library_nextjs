import { Schema, Types, model } from "mongoose"

export interface IBook {
  _id: string
  title: string
  description: string
  year: number
  rating: number
  authorId: Types.ObjectId
  genres: []
  imageUrl?: string
}

export const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
    },

    description: {
      type: String,
      trim: true,
    },

    year: {
      type: Number,
      min: 0,
      default: 1950,
    },

    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },

    authorId: {
      type: Schema.Types.ObjectId,
      ref: "Author",
      required: true,
    },

    genres: {
      type: [String],
      default: [],
    },

    imageUrl: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
)

export const Book = model("Book", bookSchema)
