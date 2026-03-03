import { Schema, model } from "mongoose"

export interface IAuthor {
  _id: string
  name: string
  bio: string
  birthDay: Date
  imageUrl: string
  createdAt: Date
  updatedAt: Date
}

export interface IAuthorSerialized extends Omit<IAuthor, "_id" | "createdAt" | "updatedAt"> {
  _id: string
  createdAt: string
  updatedAt: string
}

export const authorSchema = new Schema<IAuthor>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
    },
    bio: {
      type: String,
      trim: true,
    },
    birthDay: Date,
    imageUrl: {
      type: String,
      trim: true,
      default: "images/svg/default-picture.svg",
    },
  },

  {
    timestamps: true,
  }
)

export const Author = model<IAuthor>("Author", authorSchema)
