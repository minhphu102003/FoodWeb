import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

// Middleware để đọc JSON
app.use(express.json())

// Route đơn giản
app.get('/', (req, res) => {
  res.send('Hello Express with TypeScript!')
})

// Lắng nghe server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`)
})
