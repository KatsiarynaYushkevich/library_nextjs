import { Schema, model } from "mongoose"

export interface IAuthor {
  name: string
  bio: string
  birthDay: Date
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
  },
  {
    timestamps: true,
  }
)

export const Author = model<IAuthor>("Author", authorSchema)
