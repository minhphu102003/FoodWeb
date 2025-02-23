// src/controllers/userController.ts
import { Request, Response } from 'express'
import { users, findUserById } from '../models/userModel'

// Lấy danh sách người dùng
export const getUsers = (req: Request, res: Response): void => {
  res.json(users)
}

// Lấy thông tin một người dùng theo ID
export const getUserById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id)
  const user = findUserById(id)

  if (!user) {
    res.status(404).json({ message: 'User not found' })
    return
  }
  res.json(user)
}

// Tạo người dùng mới
export const createUser = (req: Request, res: Response): void => {
  const { name, email } = req.body

  if (!name || !email) {
    res.status(400).json({ message: 'Name and email are required' })
    return
  }

  const newUser = {
    id: users.length + 1,
    name,
    email
  }

  users.push(newUser)
  res.status(201).json(newUser)
}
