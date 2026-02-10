import mongoose from "mongoose"
const { Schema } = mongoose

const authorSchema = new Schema(
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

export const Author = mongoose.model("Author", authorSchema)
