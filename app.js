const express = require("express");
const receiptRoutes = require("./routes/receiptRoutes");

const app = express();
app.use(express.json());

// Load routes
app.use("/receipts", receiptRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Receipt Processor API is running!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
