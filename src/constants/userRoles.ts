const USER_ROLES = {
  admin: "ADMIN",
  user: "USER",
} as const

export type UserRoles = (typeof USER_ROLES)[keyof typeof USER_ROLES]

export default USER_ROLES
