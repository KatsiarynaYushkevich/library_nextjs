import { Schema, model } from "mongoose"
import USER_ROLES, { type UserRoles } from "@constants/userRoles"

export interface IUser {
  email: string
  passwordHash: string
  role: UserRoles
  favorites: []
}

export const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: Object.values(USER_ROLES),
    default: USER_ROLES.user,
  },
  favorites: {
    type: [Schema.Types.ObjectId],
    ref: "Book",
    default: [],
  },
})

export const User = model("User", userSchema)
