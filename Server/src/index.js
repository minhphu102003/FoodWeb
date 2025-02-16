import express from "express";

const app = express();
const PORT = 3000;

// Middleware để parse JSON request
app.use(express.json());

// Route cơ bản
app.get("/", (req, res) => {
  res.send("Chào mừng bạn đến với server Express!");
});

// Lắng nghe trên cổng đã chọn
app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});
