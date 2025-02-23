// src/models/userModel.ts
import { User } from '../types/userTypes'

export const users: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
]

export const findUserById = (id: number): User | undefined => {
  return users.find((user) => user.id === id)
}
